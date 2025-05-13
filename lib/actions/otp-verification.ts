"use server";
import { codeSchema } from "@/schemas";
import { z } from "zod";
import { db } from "@/lib/db";

export async function otpVerification(values: z.infer<typeof codeSchema>) {
  const validatedFields = codeSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: false, message: "Invalid Fields!" };
  }

  const { pin } = validatedFields.data;

  try {
    const resetCode = await db.passwordResetCode.findFirst({
      where: { code: pin, expires: { gt: new Date() } },
    });

    if (!resetCode) {
      return { success: false, message: "Invalid or expired code." };
    }

    await db.passwordResetCode.delete({
      where: { email: resetCode.email },
    });

    return { success: true, message: "OTP verified successfully!" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Something went wrong." };
  }
}
