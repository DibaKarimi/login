import mongoose from "mongoose";

async function connectDB() {
   console.log("12");
  if (mongoose.connections[0].readyState) return;
   console.log("13");
  mongoose.set("strictQuery", false);
   console.log("144", process.env.MONGO_URI);
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to DB");
}

export default connectDB;


