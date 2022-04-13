const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
require("dotenv").config();
const lotController = require("./controllers/lot.controller");
const vehicleController = require("./controllers/vehicle.controller");
const historyController = require("./controllers/history.controller");

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/lot", lotController);
app.use("vehicle", vehicleController);
app.use("history", historyController);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`listening to PORT: ${PORT}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
});
