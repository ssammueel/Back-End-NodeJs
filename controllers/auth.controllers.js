import userModel from "../models/usermodel.js";
import bcrypt from "bcryptjs"

export const signin = async(req,res)=>{
    try {
        const userDetails = req.body;

        const users = await userModel.findOne({email:userDetails.email})
        if (!users){

            const salt = await bcrypt.genSalt(10)
            const hpass = await bcrypt.hash(userDetails.password, salt)
            userDetails.password = hpass
            const user = await userModel.create(userDetails)
            res.send({ message: "User added successfully"});
        }
        else{
            res.send({message:"the user oready exists"})
        }
        // res.send(users)
    } catch (error) {
        console.log(error)
        res.send({message:"an error happened"})
    }
    
}

export const login = async(req,res) => {

    const user = req.body
    
    try {
        const users = await userModel.find()
        res.send(users)
        
    } catch (error) {
        console.log(error)
    }
    
}

export const logout = (req,res)=> {
    res.send({message:"this is logout"})
    console.log("logout successful")
}