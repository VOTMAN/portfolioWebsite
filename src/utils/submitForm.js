import dotenv from "dotenv";
import mongoose from "mongoose";
import formSchema from "../db/schema.js";

dotenv.config({ quiet: true });

await mongoose.connect(process.env.MONGO_URL);
console.log("Connected to MongoDB");

const Form = mongoose.models.Form || mongoose.model('Form', formSchema, 'contact');

export async function submitContactForm(formData) {
  try {
    const newForm = new Form({
      name: formData.name,
      email: formData.email,
      body: formData.body
    });

    const savedForm = await newForm.save();
    console.log("Form submitted successfully:", savedForm);
    return { success: true, data: savedForm };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, error: error.message };
  }
}

