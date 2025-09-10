require('dotenv').config();

const PORT = process.env.PORT || 2121;
const express = require("express")


const app = express();
const mongoose = require('mongoose')



app.use(express.json());


 mongoose.connect(process.env.db).then(() => {
  console.log("db connection is established");
        app.listen(PORT, () => {
            console.log(`server is runing on port${PORT}`);
  })
     }).catch((err) => {
         console.log("unable to connect to db to " + err);

    })
