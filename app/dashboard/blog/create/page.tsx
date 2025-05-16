import CreateBlog from "@/components/dashboard/blog/create/create-blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Blog Post | blog",
  description:
    "Create a new blog post easily. Write, edit, and publish your content to share with your audience on blog.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BlogCreatePage() {
  return (
    <div className="space-y-6 py-4 md:px-6">
      <CreateBlog />
    </div>
  );
}
