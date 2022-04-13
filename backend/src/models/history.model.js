const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
  {
    vehicleID: { type: mongoose.Schema.Types.ObjectId, ref: "vehicle" },
    lotID: { type: mongoose.Schema.Types.ObjectId, ref: "lot" },
    area: { type: String, required: true },
    entry: { type: String},
    exit: { type: String },
    duration: { type: String},
    amountPaid: { type: Number},
  },
  { versionKey: false, timestamps: true }
);

const History = mongoose.model("history", historySchema);
module.exports = History;
