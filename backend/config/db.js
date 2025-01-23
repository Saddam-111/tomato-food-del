import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://saddam:s19a01d04d04a01m13@cluster0.lkcxl.mongodb.net/Food-Delivery');
    console.log('Database connected Successfully')
  } catch (error) {
    console.log('Error while connecting Database');
    process.exit(1);
  }
}

