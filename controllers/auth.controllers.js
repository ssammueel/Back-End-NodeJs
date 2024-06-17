import userModel from "../models/usermodel.js";

export const signin = async(req,res)=>{
    try {
        const userDetails = req.body;

        const users = await userModel.findOne({email:userDetails.email})
        if (!users){
            const user = await userModel.create(userDetails)
            res.send({ message: "User added successfully" });
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