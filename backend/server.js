import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import userRoute from './routes/userRoute.js'
import houseRoute from './routes/houseRoute.js'
import authRoute from './routes/authRoute.js'
import cors from 'cors'
import cloudinary  from "cloudinary";
// import fileUpload from 'express-fileupload'
// import uploadController from './middleware/uploadController.js'

dotenv.config()
const app = express();
const port = process.env.PORT

const corsOptions = {
    origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

cloudinary.v2.config({
    cloud_name: "dmelyhknu",
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors(corsOptions))
// app.use(fileUpload({
//     useTempFiles : true,
// }));
// app.use("/upload", uploadController)

app.use('/api/user', userRoute);
app.use('/api/properties', houseRoute);
app.use('/api/auth', authRoute)


app.listen(port, ()=> {
    console.log(`server started on port ${port}`.magenta)
})

