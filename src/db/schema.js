import mongoose from 'mongoose';
const { Schema } = mongoose;

const formSchema = new Schema({
  name: String,
  email: String,
  body: String,
  date: { type: Date, default: Date.now },
});

export default formSchema