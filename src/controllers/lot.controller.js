const express = require("express");
const Lot = require("../models/lot.model");

const crudController = require("./crud.controller");
const router = express.Router();

const controller = crudController(Lot);

//* Create
router.post("/", controller.post);

//* Read Many
router.get("/", (req, res) => {
  res.status(200).json("reached Here");
});

//* Read One
router.get("/:id", controller.getOne);

//* Update
router.patch("/:id", controller.updateOne);

//* Delete
router.delete("/:id", controller.deleteOne);

module.exports = router;
