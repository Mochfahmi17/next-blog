"use server";

import cloudinary from "@/lib/cloudinary";

export async function uploadImage(formData: FormData) {
  const file = formData.get("image") as File;
  console.log("ini file mu dari form create blog: ", file);

  if (!file || !file.name) {
    throw new Error("No file provided.");
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  return await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "blog" }, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      })
      .end(buffer);
  });
}
