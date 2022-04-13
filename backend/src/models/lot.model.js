const mongoose = require("mongoose");

const lotSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    twoWheeler: {
      vehicles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "vehicle",
        },
      ],
      capacity: { type: Number, required: true },
    },
    hatchback: {
      vehicles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "vehicle",
        },
      ],
      capacity: { type: Number, required: true },
    },
    suv: {
      vehicles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "vehicle",
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
