import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGO DB CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.error(`Something went wrong with the DB connection ${error}`);
    process.exit(1); // 1 means exit with failure
  }
};
