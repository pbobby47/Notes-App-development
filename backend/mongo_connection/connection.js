import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.CONN_STR);
    console.log("DB Connected!!!");
  } catch (error) {
    console.log("Error while connecting with MongoDB", error.message);
  }
};

export default connectToMongoDB;
