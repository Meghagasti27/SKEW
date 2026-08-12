//index.js----> starts the backend server and connects to the database.
import dotenv from "dotenv";//dotenv is a dependency that helps us to extract the values from the .env file and use them in our code.
import connectDB from "./config/database.js";//importing the connectDB function from database.js file.
import app from "./app.js";

import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config({
    path:'./.env'
});

const startServer = async()=>{
    try{
        await connectDB();
        app.on("error",(error)=>{
            console.log("ERROR",error);
            throw error;
        });
        app.listen(process.env.PORT || 8000,()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("Error starting server:", error);
    }
}

startServer();//Server Starts