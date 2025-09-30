// src/pages/api/contact.js
import { submitContactForm } from '../../utils/submitForm.js';

export const prerender = false;

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });

export async function POST({ request }) {
  try {
    const { name, email, body } = await request.json();

    if (!name || !email || !body) {
      return json({ success: false, error: "All fields are required" }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ success: false, error: "Invalid email format" }, 400);
    }

    const result = await submitContactForm({ name, email, body });

    return result.success
      ? json({ success: true, message: "Form submitted successfully" })
      : json({ success: false, error: result.error || "Failed to submit" }, 500);

  } catch (error) {
    console.error("API Error:", error);
    return json({ success: false, error: "Internal server error" }, 500);
  }
}