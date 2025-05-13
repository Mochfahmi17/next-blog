"use server";
import { resetPasswordSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

export async function resetPassword(
  values: z.infer<typeof resetPasswordSchema>,
) {
  const validatedFields = resetPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, message: "Invalid fields!" };
  }

  const cookieStore = cookies();
  const email = (await cookieStore).get("email_for_otp")?.value;

  const { password } = validatedFields.data;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  await db.user.update({
    where: { email },
    data: {
      password: hashedPassword,
    },
  });

  (await cookieStore).delete("email_for_otp");
  (await cookieStore).delete("otp_verification");

  return { success: true, message: "Your password has been reset." };
}
