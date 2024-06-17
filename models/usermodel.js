    import mongoose from "mongoose";

    const userSchema = mongoose.Schema({
        fullName:{
            type:String,
            required:true
        },
        userName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        gender:{
            type:String,
            required:true,
            enum:["male" , "female"]
        }
    },{timestamps:true})

    const userModel = mongoose.model("users", userSchema)

    export default userModel;