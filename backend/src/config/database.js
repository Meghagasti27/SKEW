//database.js ----> it connects your backend to the db.

import mongoose from "mongoose";
//mongoose is a library that helps us to connect to a MongoDB database.

//async await is used to handle one task at a time.
//It is used to handle asynchronous code in a synchronous manner.
const connectDB = async() =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);//connecting to the db.
        console.log(`MongoDB connected:${connectionInstance.connection.host}`);//gives me the address of the db that i am connected to.
    }
    catch(error){
        console.log(`Error:${error.message}`);//if there is an error in connecting to the db, it will be logged here.
        process.exit(1);
    }
}

export default connectDB;
