import { Category, Post, User } from "@prisma/client";
import CardBlog from "../card-blog";

type BlogWithCategoryAndAuthor = Post & {
  category: Category;
  author: User;
};

type BlogListsProps = {
  posts: BlogWithCategoryAndAuthor[];
};

const BlogLists = ({ posts }: BlogListsProps) => {
  return (
    <div className="mt-4 grid items-stretch gap-8 md:grid-cols-2">
      {posts.length > 0 ? (
        posts.map((blog, i) => <CardBlog key={blog.id} blog={blog} index={i} />)
      ) : (
        <div className="mt-4">
          <p className="font-semibold">Blog not found!</p>
        </div>
      )}
    </div>
  );
};

export default BlogLists;
