import userModel from "../models/usermodel.js";
import jwt from 'jsonwebtoken'
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

    const {email, password} = req.body
    
    try {
        const user = await userModel.findOne({email})

        if(user){
            const isMatch = await bcrypt.compare(password,user.password)    //user.password means the password in the database and the password means the password the user has used
            if(isMatch){
                jwt.sign({email:user.email}, 'samuel mumo mambo', (err, token)=>{
                    if(!err){

                        res.send({token:token})
                    }else{
                        res.send({message:"error in token generation"})
                    }
                })
            }else{
                res.send({message:"wrong password"})
            }

        }else{
            res.send({message:"wrong email"})
        }
        
    } catch (error) {
        console.log(error)
    }
    
}


export const logout = (req,res)=> {
    res.send({message:"this is logout"})
    console.log("logout successful")
}

export const dummy = (req,res)=>{
    res.send({message:"this is  a dummy response"})
}