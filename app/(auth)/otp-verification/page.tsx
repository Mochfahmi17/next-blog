import OtpVerificationForm from "@/components/auth/otp-verification-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OTP Verification | blog",
  description:
    "Enter the OTP sent to your email to verify your identity and reset your password.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OtpVerificationPage() {
  return <OtpVerificationForm />;
}
