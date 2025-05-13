"use server";

import { z } from "zod";
import { blogSchema } from "@/schemas";
import { db } from "@/lib/db";
import { auth } from "@/auth";
import cloudinary from "../cloudinary";
import { revalidatePath } from "next/cache";
import generateSlug from "../utils/generateSlug";

export async function createBlog(values: z.infer<typeof blogSchema>) {
  const validatedFields = blogSchema.safeParse(values);
  const session = await auth();

  if (!session) {
    return {
      success: false,
      message: "Please log in first to create a blog post.",
    };
  }

  if (!validatedFields.success) {
    return { success: false, message: "Invalid fields!" };
  }

  const { title, content, categoryId, image, status, image_public_id } =
    validatedFields.data;

  const slug = await generateSlug(title);

  try {
    await db.post.create({
      data: {
        title,
        slug,
        authorId: session.user.id as string,
        content,
        categoryId,
        image,
        status,
        image_public_id,
      },
    });

    return { success: true, message: "Blog created successfully!" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to create a blog." };
  }
}

export async function deleteBlog(id: string, imagePublicId: string) {
  try {
    await cloudinary.uploader.destroy(imagePublicId);
    await db.post.delete({ where: { id } });
    revalidatePath("/dashboard/blog");
  } catch (error) {
    console.log(error);
  }
}

export async function updateBlog(
  id: string,
  values: z.infer<typeof blogSchema>,
) {
  const validatedFields = blogSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, message: "Invalid fields!" };
  }

  const { title, content, categoryId, image, image_public_id, status } =
    validatedFields.data;
  try {
    await db.post.update({
      where: { id },
      data: { title, content, categoryId, image, image_public_id, status },
    });

    return { success: true, message: "Update blog successfully!" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to update blog." };
  }
}
