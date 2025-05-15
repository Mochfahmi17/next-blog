import { use } from "react";
import { getPaginatedPosts } from "@/data/post";
import SearchBar from "./search-bar";
import BlogLists from "./blog-lists";
import Pagination from "./pagination";
import CategorySidebar from "./category-sidebar";

type ExploreProps = {
  searchParams: { page?: string; search?: string };
};

const Explore = ({ searchParams }: ExploreProps) => {
  const currentPage = parseInt(searchParams.page || "1");
  const limit = 12;
  const search = searchParams.search || "";

  const { posts, totalPages } =
    use(getPaginatedPosts(currentPage, limit, search)) ?? [];
  return (
    <section className="pt-20 pb-8">
      <div className="container mx-auto px-[3%]">
        <div className="grid justify-center gap-8 md:grid-cols-12">
          <div className="md:col-span-9">
            <p className="mb-3 text-lg font-bold">Blogs</p>
            <SearchBar initialSearch={search} />
            <BlogLists posts={posts} />
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </div>
          <div className="md:col-span-3">
            <CategorySidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
