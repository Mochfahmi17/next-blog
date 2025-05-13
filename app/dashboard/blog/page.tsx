import ManageBlog from "@/components/dashboard/blog/manage-blog";
import { Suspense } from "react";

export default function BlogPage() {
  return (
    <div className="space-y-6 py-4 md:px-6">
      <Suspense fallback={<p>Loading...</p>}>
        <ManageBlog />
      </Suspense>
    </div>
  );
}
