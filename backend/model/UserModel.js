import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import validator from "validator";


const UserSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    phone: {type: String, require: true, unique: true},
    avatar: {type: String},
    allProperties: [{type: mongoose.Schema.Types.ObjectId, ref: 'Property'}]
});

//static signup method
UserSchema.statics.signup = async function(name, email, password, phone) {
    //validation

    if(!email || !password || !phone || !name){
        throw new Error('All fields must be filled')
    }

    if(!validator.isEmail(email)){
        throw new Error('Email is not valid')
    }

    // if(!validator.isStrongPassword(password)){
    //     throw new Error('Enter strong password')
    // }

    //write validator for correct phone number later here

    const exists = await this.findOne({email});
    if(exists){
        throw new Error('email already in use')
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({name, email, password: hash, phone})

    return user;
}

//static login method
UserSchema.statics.login = async function(email, password){
    if(!email || !password){
        throw new Error('All fields must be filled')
    }

    const user = await this.findOne({email});
    if(!user){
        throw new Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw new Error('Incorrect password')
    }
    return user;
}

const userModel = mongoose.model('User', UserSchema);
export default userModel;