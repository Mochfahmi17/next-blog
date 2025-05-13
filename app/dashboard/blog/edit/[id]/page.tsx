import EditBlog from "@/components/dashboard/blog/edit/edit-blog";

export default function BlogEditPage({ params }: { params: { id: string } }) {
  const blogId = params.id;
  console.log(blogId);
  return (
    <div className="space-y-6 py-4 md:px-6">
      <EditBlog id={blogId} />
    </div>
  );
}
