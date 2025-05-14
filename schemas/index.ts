import { object, string, z } from "zod";

export const loginSchema = object({
  email: string().min(1, "Email is required.").email("Invalid email."),
  password: string().min(1, "Password is required."),
});

export const registerSchema = object({
  name: string().min(1, "Name is required."),
  email: string().min(1, "Email is required.").email("Invalid email."),
  password: string().min(6, "Minimum 6 characters required."),
  confirmPassword: string().min(6, "Minimum 6 chracters required."),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password doesn't match.",
  path: ["confirmPassword"],
});

export const sendEmailSchema = object({
  email: string().min(1, "Email is required.").email("Invalid email."),
});

export const codeSchema = object({
  pin: string().min(4, "Your otp must be 4 characters."),
});

export const resetPasswordSchema = object({
  password: string().min(6, "Minimum 6 characters required."),
  confirmPassword: string().min(6, "Minimum 6 characters required."),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password doesn't match.",
  path: ["confirmPassword"],
});

export const blogSchema = object({
  title: string()
    .min(1, "Title is required.")
    .max(255, "Title cannot exceed 255 characters."),
  content: string().min(50, "Content at least 50 characters."),
  image: string().url("Please upload a valid image."),
  image_public_id: string(),
  categoryId: string().min(1, "Please select a category."),
  status: z.enum(["Draft", "Publish"], {
    required_error: "Please select post status.",
  }),
});

export const contactSchema = object({
  name: string().min(1, "Name is required."),
  email: string().min(1, "Email is required.").email("Invalid email."),
  subject: string()
    .min(1, "Subject is required.")
    .max(200, "Subject cannot exceed 200 characters."),
  message: string()
    .min(1, "Message is required.")
    .max(255, "MEssage cannot exceed 255 characters."),
});
