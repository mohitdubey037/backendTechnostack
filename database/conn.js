import mongoose from "mongoose";

export default async function connect() {
  const MONGODB_URI = `mongodb+srv://mohit121:dubeyMohit037@cluster0.4xkbb.mongodb.net/Quiz`;
  await mongoose.connect(MONGODB_URI);
  console.log('database connected');
}
