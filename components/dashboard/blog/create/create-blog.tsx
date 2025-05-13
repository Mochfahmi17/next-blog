import CreateBlogForm from "@/components/dashboard/blog/create/create-blog-form";
import { getCategories } from "@/data/category";
import { use } from "react";

const CreateBlog = () => {
  const categories = use(getCategories());
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold">Create New Post</h1>
      <CreateBlogForm categories={categories} />
    </div>
  );
};

export default CreateBlog;
