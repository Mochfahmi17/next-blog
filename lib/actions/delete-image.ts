"use server";

import cloudinary from "@/lib/cloudinary";

export async function deleteImage(public_id: string) {
  try {
    const result = await cloudinary.uploader.destroy(public_id);
    return result;
  } catch (error) {
    console.error("Error deleting image: ", error);
    throw error;
  }
}
