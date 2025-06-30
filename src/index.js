import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config(
  {
    path: "./.env"  // Ensure the path to your .env file is correct
  }
);





connectDB()

.then(()=>{
  app.listen(process.env.PORT || 8000, () => {  
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
  });
  console.log("✅ Connected to MongoDB");
})
.catch((error)=>{
  console.log("Mongo DB connection error:", error);
})





















/*
import express from "express "
const app = express();
(async ()=>{
  try{
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   app.on("error",(error)=>{
    console.log("Error connecting to MongoDB");
    throw error;
   })
   app.listen(process.env.PORT,()=>{
    console.log(`APP is running on port ${process.env.PORT}`);
   });
  }
  catch(error){
    console.log("Error connecting to MongoDB:", error);
    throw error;
  }
})()
  */