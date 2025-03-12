import mongoose from "mongoose";
let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGOOSE_URL) {
    return console.log("MISSING MONGODB URL");
  }

  if (isConnected) {
    return console.log("Already connected to the database");
  }

  try {
    await mongoose.connect(process.env.MONGOOSE_URL, {
      dbName: "devflow",
    });
    isConnected = true;
    console.log("Connected to the database successfully");
  } catch (error) {
    console.log(error);
  }
};
