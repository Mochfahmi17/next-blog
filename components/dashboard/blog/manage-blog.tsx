import Image from "next/image";
import CardWrapperPost from "../card-wrapper-post";
import { Eye, MessageCircle, SquarePen, Tags, Trash2 } from "lucide-react";
import { use } from "react";
import { getPostsByAuthor } from "@/data/post";
import { DeleteButton, EditButton } from "./button";

const ManageBlog = () => {
  const posts = use(getPostsByAuthor());
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold">Manage blog</h1>
      <CardWrapperPost
        cardTitle="All Blog"
        cardHref="/dashboard/blog/create"
        cardLinkTitle="Add New"
      >
        <ul className="max-h-60 max-w-screen space-y-3 overflow-y-auto">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <li key={post.id} className="flex items-center space-x-3">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={80}
                  height={50}
                  className="shrink-0 rounded object-cover"
                />
                <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
                  <div className="">
                    <h2 className="truncate font-semibold select-text">
                      {post.title}
                    </h2>
                    <div className="mt-1 flex items-center space-x-6 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Tags className="size-4" />{" "}
                        <span>{post.category.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="size-4" />{" "}
                        <span>325 Comments</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="size-4" /> <span>565 Views</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <EditButton id={post.id}>
                      <SquarePen className="size-5 hover:text-blue-500" />
                    </EditButton>
                    |
                    <DeleteButton
                      id={post.id}
                      imagePublicId={post.image_public_id}
                    >
                      <Trash2 className="hover:text-destructive size-5" />
                    </DeleteButton>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li className="text-center">Posts not found!</li>
          )}
        </ul>
      </CardWrapperPost>
    </div>
  );
};

export default ManageBlog;
