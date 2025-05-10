import httpStatus from "http-status";
import {User} from "../models/User.model.js"
import bcrypt, {hash} from "bcrypt";



const register = async(req,res)=>{
    const {name,username,password} = req.body
}

try{
const existingUser = await UserActivation.findOne({username});
if(existingUser){
    return res.status(httpStatus.FOUND).json({message:"User already exists"})
}
const hashedPassword = await bcrypt.hash(password, 10);
}
catch {

}