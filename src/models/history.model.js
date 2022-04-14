const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
  {
    vehicleID: { type: mongoose.Schema.Types.ObjectId, ref: "vehicle" },
    lotID: { type: mongoose.Schema.Types.ObjectId, ref: "lot" },
    area: { type: String, required: true },
    entry: { type: Date, default: Date.now },
    exit: { type: Date, default: null },
    duration: { type: String },
    amountPaid: { type: Number, default: 0 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const History = mongoose.model("history", historySchema);
module.exports = History;
