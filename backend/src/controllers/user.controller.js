import httpStatus from "http-status";
import {User} from "../models/User.model.js"
import bcrypt, {hash} from "bcrypt";

const login = async(req,res)=>{
    const {username,password}= req.body;

    if(!username  || !password){
        return res.status(400).json({message:"Please Provide" })
    }
    try{

    } catch(e){
        
    }
}









const register = async(req,res)=>{
    const {name,username,password} = req.body
}

try{
const existingUser = await UserActivation.findOne({username});
if(existingUser){
    return res.status(httpStatus.FOUND).json({message:"User already exists"})
}
const hashedPassword = await bcrypt.hash(password, 10);
const newUser = new User({
    name: name,
    username:username,
    password:hashedPassword
});
await newUser.save();
res.status(httpStatus.CREATED).json({message:"User Registered"})

}catch (e){

res.json({message:`Something went wrong${e}s`})
}