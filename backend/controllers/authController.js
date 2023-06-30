import User from '../model/UserModel.js'
import { createToken } from '../utils/createToken.js';


//signup user
export const signup = async (req, res)=> {

    const {name, email, password, phone} = req.body;

    try {
        const user = await User.signup(name, email, password, phone);

        //create a token
        const token = createToken(user._id)

        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message})
    }

};


//login user
export const login = async (req, res)=> {
    const {email, password} = req.body;

    try {
        const user = await User.login(email, password);
        //create a token
        const token = createToken(user._id);
        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};