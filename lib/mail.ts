import { Resend } from "resend";
import {
  contactEmailTemplate,
  verifySendEmailOtpTemplate,
} from "./utils/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOtpEmail = async (email: string, code: string) => {
  await resend.emails.send({
    from: "blog <onboarding@resend.dev>",
    to: email,
    subject: "OTP Verification",
    html: verifySendEmailOtpTemplate(code),
  });
};

export const sendContactEmail = async (
  name: string,
  email: string,
  subject: string,
  message: string,
) => {
  await resend.emails.send({
    from: `${email} <onboarding@resend.dev>`,
    to: "mochammadfahmiks@gmail.com",
    subject,
    html: contactEmailTemplate(name, message),
  });
};
