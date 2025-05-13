import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });

    return user;
  } catch (error) {
    console.error(error);
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetails = async (userId: string) => {
  try {
    if (!userId) return;

    const user = await db.user.findUnique({
      where: { id: userId },
      include: {
        _count: { select: { Post: true } },
        Post: { orderBy: { createdAt: "desc" }, take: 5 },
      },
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};
