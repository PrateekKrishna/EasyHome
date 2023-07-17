import Property from "../model/HouseModel.js";
import User from "../model/UserModel.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
import getDataUri from "../utils/dataUri.js";
dotenv.config();

//function to add property
export const createProperty = async (req, res) => {
  const { title, description, location, price } = req.body;
  const file = req.file;
  if (!file) {
    throw Error("File not found");
  }

  const owner = await User.findById(req.user).select("-password");

  if (!owner) {
    throw new Error("Invalid request, user not found");
  }

  const fileUri = getDataUri(file);
  // console.log(fileUri);

  const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

  const response = await Property.create({
    title,
    description,
    location,
    photo: myCloud.secure_url,
    price,
    owner: owner,
  });
  owner.allProperties.push(response);
  await owner.save();

  res.status(200).json({message: response});
};

export const getAllProperties = async (req, res) => {
  const owner = await User.findById(req.user).select("-password");
  if (!owner) {
    throw new Error("Invalid request, user not found");
  }
  const response = await Property.find({});
  res.status(200).json({ message: response });
};

//function to get details of specific property
export const getPropertyDetail = async (req, res) => {
  const houseID = req.params.id;
  const owner = await User.findById(req.user).select("-password");
  if (!owner) {
    throw new Error("Invalid request, user not found");
  }

  const data = await Property.findById({ _id: houseID });
  res.status(200).json({ message: data });
};

//function to update property
export const updateProperty = async (req, res) => {
  const houseID = req.params.id;
  const { title, description, location, price } = req.body;
  const file = req.file;
  if (!file) {
    throw new Error("File not found");
  }
  const owner = await User.findById(req.user).select("-password");
  if (!owner) {
    throw new Error("Invalid request, user not found");
  }
  const house = await Property.findById({ _id: houseID });
  if (house.owner != owner.id) {
    // console.log('NOT EQUAL');
    res.status(401);
    throw new Error("You cannot delete others property");
  }

  const fileUri = getDataUri(file);
  // console.log(fileUri);

  const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

  const updatedHome = await Property.findByIdAndUpdate(
    { _id: houseID },
    {
      $set: {
        title,
        description,
        location,
        photo: myCloud.secure_url,
        price,
        owner: owner,
      },
    },
    {
      new: true,
    }
  );

  res.status(200).json({message: updatedHome});
};

//functino to delete property
export const deleteProperty = async (req, res) => {
  const houseID = req.params.id;
  const owner = await User.findById(req.user).select("-password");
  if (!owner) {
    throw new Error("Invalid request, user not found");
  }
  const house = await Property.findById({ _id: houseID });
  if (house.owner != owner.id) {
    // console.log('NOT EQUAL');
    res.status(401);
    throw new Error("You cannot delete others property");
  }
  // console.log(house.owner, owner._id);
  const dlt = await Property.findByIdAndDelete({ _id: houseID });
  res.status(200).json({ message: dlt });
};
