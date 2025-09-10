require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 2121;

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Database connection is established");
    app.listen(PORT, () => {
      console.log(`server is runing on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Unable to connect to Database: " + error.message);
  });
