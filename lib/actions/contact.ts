"use server";

import { contactSchema } from "@/schemas";
import { z } from "zod";
import { sendContactEmail } from "../mail";

export async function sendContactMessage(
  values: z.infer<typeof contactSchema>,
) {
  const validatedFields = contactSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, message: "Invalid Fields!" };
  }

  const { name, email, message, subject } = validatedFields.data;

  try {
    await sendContactEmail(name, email, subject, message);

    return { success: true, message: "Thank you for contact to us." };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: "Failed to send message" };
    }
    return { success: false, message: "Something went wrong!" };
  }
}
