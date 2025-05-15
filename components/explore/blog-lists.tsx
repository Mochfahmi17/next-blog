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
    <div className="grid items-stretch gap-6 md:grid-cols-2">
      {posts.map((blog) => (
        <CardBlog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogLists;
