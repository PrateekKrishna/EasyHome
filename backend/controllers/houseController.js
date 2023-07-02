import Property from "../model/HouseModel.js";
import User from "../model/UserModel.js";
import cloudinary  from "cloudinary";
import dotenv from "dotenv";
import getDataUri from "../utils/dataUri.js";
dotenv.config();

// cloudinary.config({
//   cloud_name: "dmelyhknu",
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

//create property, protected , /create
export const createProperty = async (req, res) => {

  const { title, description, location, price } = req.body;
  const file = req.file;
  if(!file){
    throw new Error('File not found')
  }
  
  const owner = await User.findById(req.user).select("-password");

  if(!owner){
    throw new Error('Invalid request, user not found')
  }

  const fileUri = getDataUri(file)
  // console.log(fileUri);

  const myCloud  = await cloudinary.v2.uploader.upload(fileUri.content)

  const response = await Property.create({
      title, 
      description,
      location,
      photo: myCloud.secure_url,
      price,
      owner: owner._id
  })
  owner.allProperties.push(response._id)
  await owner.save()

  res.status(200).json(response);
};



export const getAllProperties = async (req, res) => {
    res.status(200).json({ message: "get house" });
  };
  export const getPropertyDetail = async (req, res) => {};
export const updateProperty = async (req, res) => {};
export const deleteProperty = async (req, res) => {};
