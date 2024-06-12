import mongoose from "mongoose";


export const connectDb = async() => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("the database is sucessfully connected")   

    } catch (error) {
        console.log("there was error in connecting to the database", error)
        
    }
} 