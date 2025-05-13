"use server";

import { getUserByEmail } from "@/data/user";
import { registerSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { db } from "@/lib/db";

export async function register(values: z.infer<typeof registerSchema>) {
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, message: "Invalid fields!" };
  }

  const { name, email, password } = validatedFields.data;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { success: false, message: "Email already use!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: true, message: "Register successfully!" };
}
