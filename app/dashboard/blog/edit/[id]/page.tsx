import EditBlog from "@/components/dashboard/blog/edit/edit-blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Blog Post | blog",
  description:
    "Edit your existing blog post easily. Update content, images, and settings before publishing changes on blog.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BlogEditPage({ params }: { params: { id: string } }) {
  const blogId = params.id;
  console.log(blogId);
  return (
    <div className="space-y-6 py-4 md:px-6">
      <EditBlog id={blogId} />
    </div>
  );
}
