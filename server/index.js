const express = require("express");
const router = require("./routes/tasks");
const app = express();
require("dotenv").config();
const connectDB = require("./connect");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/v1/tasks", router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => console.log("Server running..."));
  } catch (err) {
    console.log(err);
  }
};

start();
