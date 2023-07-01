import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import userRoute from './routes/userRoute.js'
import houseRoute from './routes/houseRoute.js'
import authRoute from './routes/authRoute.js'
import cors from 'cors'

dotenv.config()
const app = express();
const port = process.env.PORT
const corsOptions = {
    origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors(corsOptions))


app.use('/api/users', userRoute);
app.use('/api/properties', houseRoute);
app.use('/api/auth', authRoute)


app.listen(port, ()=> {
    console.log(`server started on port ${port}`.magenta)
})

