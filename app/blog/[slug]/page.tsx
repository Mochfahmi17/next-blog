import DetailBlog from "@/components/dashboard/blog/detail/detail-blog";
import { getBlogBySlug } from "@/data/post";
import getExcerpt from "@/lib/utils/getExcerpt";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { use } from "react";

type DetailBlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: DetailBlogPageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Arrticle Not Found | blog",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${blog.title} | blog`,
    description: `${getExcerpt(blog.content).slice(0, 150)}`,
  };
}

export default function DetailBlogPage({ params }: DetailBlogPageProps) {
  const { slug } = use(params);
  const blog = use(getBlogBySlug(slug));
  if (!blog) return notFound();
  return (
    <main className="animate__animated animate__fadeIn">
      <DetailBlog blog={blog} />;
    </main>
  );
}
