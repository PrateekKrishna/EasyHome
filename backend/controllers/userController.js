// import User from '../model/UserModel.js'
import Property from "../model/HouseModel.js";
import User from "../model/UserModel.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

export const getUser = async (req, res)=> {
    const owner = await User.findById(req.user).select("-password");
    if(!owner){
        res.status(500).json({message: "not authorized, user not found"})
    }
    res.status(200).json({message: owner})
};
export const createUser = async (req, res)=> {};

export const getUserProperties = async (req, res)=> {
    const userID = req.user;
    const owner = await User.findById(req.user).select("-password");
    if(!owner){
        res.status(500).json({message: "not authorized, user not found"})
    }

    const response = await Property.find({owner: userID});
    
    // console.log(typeof(result));
    res.status(200).json({message: response})
    
};
