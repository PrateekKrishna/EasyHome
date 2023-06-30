import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    avatar: {type: String},
    allProperties: [{type: mongoose.Schema.Types.ObjectId, ref: 'Property'}]
});

const userModel = mongoose.model('User', UserSchema);

export default userModel;