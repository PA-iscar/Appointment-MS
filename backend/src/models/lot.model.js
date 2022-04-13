const mongoose = require("mongoose");

const lotSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    twoWheller: {
      vehicles: [
        {
          vehicleID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "vehicle",
            unique: true,
          },
        },
      ],
      capacity: { type: Number, required: true },
    },
    hatchback: {
      vehicles: [
        {
          vehicleID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "vehicle",
            unique: true,
          },
        },
      ],
      capacity: { type: Number, required: true },
    },
    suv: {
      vehicles: [
        {
          vehicleID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "vehicle",
            unique: true,
          },
        },
      ],
      capacity: { type: Number, required: true },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Lot = mongoose.model("lot", lotSchema);

module.exports = Lot;
