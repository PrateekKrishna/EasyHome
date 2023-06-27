const express = require("express")
const dotenv = require("dotenv").config()
const colors = require('colors')
const mongoose = require('mongoose')
const connectDB = require('./config/db')

import userRouter from './routes/userRoute.routes.js';
import propertyRouter from './routes/houseRoute.routes.js';

const app = express();
const port = process.env.PORT

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.use('/api/users', userRouter);
app.use('/api/properties', propertyRouter);



app.listen(port, ()=> {
    console.log(`server started on port ${port}`)
})

