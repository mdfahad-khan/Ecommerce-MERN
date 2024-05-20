const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("connected to db");
      console.log(`server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to database", error);
  });
