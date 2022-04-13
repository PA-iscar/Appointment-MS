const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    vehicleType: { type: String, required: true },
    number: { type: String, required: true, unique: true },
    lotID: { type: mongoose.Schema.Types.ObjectId, ref: "lot" },
    history: [{ type: mongoose.Schema.Types.ObjectId, ref: "history" }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Vehicle = mongoose.model("vehicle", vehicleSchema);

module.exports = Vehicle;
