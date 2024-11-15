const express = require('express');
const { json, urlencoded } = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const connectMongoDB = require('./connection.js');
const userRouter = require('./routes/user.js');

const cookieParser = require('cookie-parser');
const cors = require('cors');

// const {Authorize} = require("./middlewares/authorization.js")
const port = 6900

dotenv.config();
const app = express()

app.use(cookieParser())
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

// app.use(Authorize("token"))


// console.log(process.env.MONGODB_CONNECT_URI)
connectMongoDB(process.env.MONGODB_CONNECT_URI).then((value)=>{
  console.log("server connected")
}).catch((err)=>{
    console.log(err)
})
app.use(urlencoded({extended:false}))

app.use('/',userRouter)

app.listen(port,()=> console.log(`Server Started At ${port}`))