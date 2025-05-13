import { getCategories } from "@/data/category";
import { getBlogById } from "@/data/post";
import { use } from "react";
import EditBlogForm from "./edit-blog-form";

const EditBlog = ({ id }: { id: string }) => {
  const blog = use(getBlogById(id));
  const categories = use(getCategories());
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold">Edit Blog</h1>
      <EditBlogForm categories={categories} initialData={blog} />
    </div>
  );
};

export default EditBlog;
