require("dotenv").config();

const PORT = process.env.PORT || 2121;
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// app.use(router)

const db = process.env.db;
mongoose
  .connect(db)
  .then(() => {
    console.log("Connection to DataBase has been established successfully");
    app.listen(PORT, () => {
      console.log(`server is runing on Port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("unable to connect to db to " + err);
  });
