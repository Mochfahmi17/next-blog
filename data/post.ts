import { auth } from "@/auth";
import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

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

export async function getPaginatedPosts(
  page: number = 1,
  limit: number = 12,
  query: string = "",
  category: string = "",
) {
  const skip = (page - 1) * limit;

  const where: Prisma.PostWhereInput = {
    status: "Publish",
    ...(query && { title: { contains: query, mode: "insensitive" } }),
    ...(category && { category: { name: category } }),
  };

  const [posts, totalPosts] = await Promise.all([
    db.post.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: { category: true, author: true },
      skip,
      take: limit,
    }),
    db.post.count({ where }),
  ]);

  const totalPages = Math.ceil(totalPosts / limit);

  return { posts, totalPages };
}
