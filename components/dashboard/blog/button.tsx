"use client";
import { deleteBlog } from "@/lib/actions/blog";
import Link from "next/link";
import { toast } from "sonner";

export function DeleteButton({
  id,
  imagePublicId,
  children,
}: {
  id: string;
  imagePublicId: string;
  children: React.ReactNode;
}) {
  const deletePostWithId = async () => {
    try {
      const confirmed = confirm("Are you sure you want to delete this post?");
      if (!confirmed) return;

      await deleteBlog(id, imagePublicId);
      toast.success("delete successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Delete this post is failed!");
    }
  };

  return (
    <button
      type="button"
      onClick={deletePostWithId}
      className="flex cursor-pointer items-center gap-1 transition-all"
    >
      {children}
    </button>
  );
}

export function EditButton({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={`/dashboard/blog/edit/${id}`}
      className="flex cursor-pointer items-center gap-1 transition-all"
    >
      {children}
    </Link>
  );
}
