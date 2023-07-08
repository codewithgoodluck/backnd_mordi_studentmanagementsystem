const express = require("express");
const connectDB = require("./connectDB");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const app = express(express);
const router = express.Router();
const cors = require('cors');
const userRoute= require('../backend/routes/userRoute');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//middlware
app.use(cors())

//Routes
app.get('/', (req,res) =>{
  res.send('Home page');
  });

  

//middlewares
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())

//Route MiddleWare
app.use('/api/users', userRoute)



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
