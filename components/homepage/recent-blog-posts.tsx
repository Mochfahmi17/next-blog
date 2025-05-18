import CardBlog from "@/components/card-blog";
import { Button } from "@/components/ui/button";
import { getLatestBlogs } from "@/data/post";
import Link from "next/link";
import { use } from "react";

const RecentBlogPosts = () => {
  const blogs = use(getLatestBlogs()) ?? [];

  const recentBlogs = blogs.slice(1);
  return (
    <section className="py-14">
      <div className="container mx-auto px-[5%]">
        <h3 className="text-2xl font-bold">Recent blog posts</h3>
        <div className="mt-6 grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentBlogs.map((blog) => (
            <CardBlog key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button size="lg" asChild className="cursor-pointer">
            <Link href="/explore">See More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogPosts;
