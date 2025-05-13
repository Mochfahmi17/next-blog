import { auth } from "@/auth";
import { db } from "@/lib/db";

export async function getPostsByAuthor() {
  try {
    const session = await auth();

    if (!session) return [];

    const posts = await db.post.findMany({
      where: { authorId: session.user.id },
      orderBy: { createdAt: "desc" },
      include: { category: true, author: true },
    });
    return posts;
  } catch (error) {
    console.log("Failed to fetch posts: ", error);
  }
}

export async function getBlogById(id: string) {
  try {
    const blogs = await db.post.findUnique({
      where: { id },
      include: { category: true },
    });

    if (!blogs) {
      throw new Error("Blog not found!");
    }

    return blogs;
  } catch (error) {
    console.log("Failed to fetch posts: ", error);
  }
}

export async function getLatestBlogs() {
  try {
    const blogs = await db.post.findMany({
      where: { status: "Publish" },
      orderBy: { createdAt: "desc" },
      include: { category: true, author: true },
      take: 7,
    });

    return blogs;
  } catch (error) {
    console.log(error);
  }
}

export async function getBlogBySlug(slug: string) {
  try {
    const blog = await db.post.findUnique({
      where: { slug },
      include: { author: true, category: true },
    });
    return blog;
  } catch (error) {
    console.log(error);
  }
}
