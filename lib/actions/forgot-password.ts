"use server";

import { getUserByEmail } from "@/data/user";
import { sendEmailSchema } from "@/schemas";
import { z } from "zod";
import { sendOtpEmail } from "@/lib/mail";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

export async function forgotPassword(values: z.infer<typeof sendEmailSchema>) {
  const validatedFields = sendEmailSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, message: "Invalid fields!" };
  }

  const { email } = validatedFields.data;

  const user = await getUserByEmail(email);
  if (!user) {
    return { success: false, message: "Email not found!" };
  }

  const code = Math.floor(1000 + Math.random() * 9000).toString();

  const expires = new Date();
  //* Expired dalam 15 menit
  expires.setMinutes(expires.getMinutes() + 15);

  await sendOtpEmail(user.email, code);
  const existingCode = await db.passwordResetCode.findUnique({
    where: { email },
  });
  if (existingCode) {
    await db.passwordResetCode.update({
      where: { email },
      data: { code, expires },
    });
  } else {
    await db.passwordResetCode.create({
      data: {
        email,
        code,
        expires,
      },
    });
  }

  const cookieStore = cookies();
  (await cookieStore).set("otp_verification", "true", {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 15,
  });

  (await cookieStore).set("email_for_otp", email, {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 15,
  });

  return { success: true, message: "otp has been send on your email!" };
}
