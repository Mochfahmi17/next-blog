import { db } from "@/lib/db";

export async function getCategories() {
  try {
    const categories = await db.category.findMany({ orderBy: { name: "asc" } });

    return categories;
  } catch (error) {
    console.error("Failed to fetch categories: ", error);
  }
}

export async function getCategoryByName(categoryName: string) {
  try {
    const category = await db.category.findFirst({
      where: { name: categoryName },
    });

    return category;
  } catch (error) {
    console.error("failed to fetch category: ", error);
  }
}
