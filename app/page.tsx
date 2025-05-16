import Hero from "@/components/homepage/hero";
import RecentBlogPosts from "@/components/homepage/recent-blog-posts";

export default function Home() {
  return (
    <main className="animate__animated animate__fadeIn">
      <Hero />
      <RecentBlogPosts />
    </main>
  );
}
