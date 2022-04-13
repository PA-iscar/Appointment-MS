const express = require("express");
const Vehicle = require("../models/vehicle.model");
const History = require("../models/history.model");
const Lot = require("../models/lot.model");

const crudController = require("./crud.controller");
const calcAmount = require("../util/paymentCalculator");
const millisToTime = require("../util/durationCalculator");
const router = express.Router();

const controller = crudController(Vehicle);

//* Create Vehicle Entry

router.post("/:id", async (req, res) => {
  const lot = await Lot.findById(req.params.id);
  const vtype = req.body.vehicleType;
  const validTypes = ["twoWheeler", "hatchback", "suv"];
  if (!validTypes.includes(vtype)) {
    res.status(400).json("Vehicle type not supported");
  } else {
    if (!lot) res.status(400).json("Invalid Lot");
    else {
      let selectedType = lot[vtype];

      if (selectedType.vehicles.length >= selectedType.capacity)
        res.status(400).json("Lot is full!");
      else {
        let vehicle = await Vehicle.findOne({ number: req.body.number });

        if (!vehicle) {
          vehicle = await Vehicle.create({
            ...req.body,
            lotID: req.params.id,
          });
        }
        if (selectedType.vehicles.includes(vehicle._id)) {
          res.status(400).json("Vehicle already in Lot!");
        } else {
          const history = await History.create({
            vehicleID: vehicle._id,
            lotID: vehicle.lotID,
            area:
              vehicle.vehicleType == "twoWheeler"
                ? "Two Wheeler area"
                : vehicle.vehicleType == "suv"
                ? "SUV area"
                : "Hatchback area",
          });
          vehicle.history = [...vehicle.history, history._id];
          const updatedVehicle = await Vehicle.findByIdAndUpdate(
            vehicle._id,
            vehicle,
            { new: true }
          );
          selectedType.vehicles = [...selectedType.vehicles, vehicle._id];
          const updatedLot = await Lot.findByIdAndUpdate(lot._id, lot, {
            new: true,
          });
          res.status(201).json(vehicle);
        }
      }
    }
  }
});

//* Create Vehicle Exit

router.patch("/:id", async (req, res) => {
  const lot = await Lot.findById(req.params.id);
  if (!lot) res.status(400).json("Invalid Lot");
  else {
    const vehicle = await Vehicle.findOne({ number: req.body.number });
    if (!vehicle) res.status(400).json("Vehicle not in Lot!");
    else {
      const vtype = vehicle.vehicleType;
      const validTypes = ["twoWheeler", "hatchback", "suv"];
      if (!validTypes.includes(vtype)) {
        res.status(400).json("Vehicle type not supported");
      } else {
        let selectedType = lot[vehicle.vehicleType];

        if (!selectedType.vehicles.includes(vehicle._id))
          res.status(400).json("Vehicle not in Lot!");
        else {
          const history = await History.findOne({
            vehicleID: vehicle._id,
            exit: null,
          });
          history.exit = Date.now();
          const duration = history.exit - history.entry;
          history.duration = millisToTime(duration);
          history.amountPaid = calcAmount(duration / (1000 * 60 * 60));

          const updatedHistory = await History.findOneAndUpdate(
            {
              vehicleID: vehicle._id,
              exit: null,
            },
            history,
            { new: true }
          );

          selectedType.vehicles = selectedType.vehicles.filter(
            (el) => !el.equals(vehicle._id)
          );
          const updatedLot = await Lot.findByIdAndUpdate(lot._id, lot, {
            new: true,
          });

          res.status(201).json(updatedHistory.amountPaid);
        }
      }
    }
  }
});

// //* Read Many
// router.get("/", controller.getAll);

// //* Read One
// router.get("/:id", controller.getOne);

// //* Update
// router.patch("/:id", controller.updateOne);

// //* Delete
// router.delete("/:id", controller.deleteOne);

module.exports = router;
