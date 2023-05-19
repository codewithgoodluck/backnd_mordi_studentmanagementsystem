const express = require("express");
const connectDB = require("./connectDB");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Task = require("./file/taskModel");
const app = express(express);
const router = express.Router();
const task_route = require("./routes/taskRoutes");
const cors = require('cors')

//middlware
app.use(cors())
app.use(express.json());
app.use(task_route);

router.get("/", (req, res) => {
  res.send("Request Send me");
});



// mongoose.connect(process.env.MONGO_URI).then(()=>{
//     app.listen("5000", ()=>{
//         console.log("Server running on port 5000")
//          })
// }).catch((err)=>{
//     console.log(err)
// })

const Start = async () => {
  try {
    await connectDB();
    app.listen("5000", () => {
      console.log("Server running on port 5000");
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

Start();
