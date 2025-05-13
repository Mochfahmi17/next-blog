import DetailBlog from "@/components/dashboard/blog/detail/detail-blog";
import { getBlogBySlug } from "@/data/post";
import { notFound } from "next/navigation";
import { use } from "react";

export default function DetailBlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const blog = use(getBlogBySlug(slug));
  if (!blog) return notFound();
  return <DetailBlog blog={blog} />;
}
