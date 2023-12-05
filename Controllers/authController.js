import { StatusCodes } from "http-status-codes";
import User from '../models/userModel.js'
import { hashPassword } from "../utils/password.js";
import { comparePassword } from "../utils/password.js";
import { UnauthenticatedError } from "../Errors/customError.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async(req , res) => {

    const isFirstAccount = await User.countDocuments() === 0;
    req.body.role = isFirstAccount? 'admin':'user';

    //password security
    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;

    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg: 'user created' });
}

export const login = async(req , res) => {
    const user = await User.findOne({email: req.body.email});
    const isValidUser = user && (await comparePassword(req.body.password , user.password));
    if(!isValidUser) throw new UnauthenticatedError('invalid credentials')

    //if user will give correct info then we will provide user a jwt token in which its data will be present

    const token = createJWT({userId: user._id , role: user.role});

    const oneDay = 1000*60*60*24;

    //http only cookie ke through 

    res.cookie('token' , token , {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === 'production',
    });

    res.status(StatusCodes.OK).json({ msg: "user logged in sucessfully"});
}

export const logout = (req , res) => {
    res.cookie('token' , 'logout' , {
        httpOnly: true,
        expires: new Date(Date.now()),
    });
    res.status(StatusCodes.OK).json({msg: 'logout sucessfully'})
}