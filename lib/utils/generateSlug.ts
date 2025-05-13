import { db } from "@/lib/db";

export default async function generateSlug(title: string) {
  const baseSlug = title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  let slug = baseSlug;

  let existsSlug = await db.post.findUnique({ where: { slug } });

  while (existsSlug) {
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    slug = `${baseSlug}-${randomDigits}`;
    existsSlug = await db.post.findUnique({ where: { slug } });
  }

  return slug;
}
