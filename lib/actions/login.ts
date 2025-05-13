"use server";

import { signIn } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { loginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import { z } from "zod";

export async function login(values: z.infer<typeof loginSchema>) {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, message: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { success: false, message: "Email doesn't exists." };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return { success: true, message: "Login successfully!" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { success: false, message: "Invalid credentials!" };
        default:
          return {
            success: false,
            message: "An unexpected error occurred.",
          };
      }
    }
    return { success: false, message: "Failed to authenticate" };
  }
}
