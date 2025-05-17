import CardWrapperAvatar from "@/components/dashboard/card-wrapper-avatar";
import CardWrapperInformation from "@/components/dashboard/card-wrapper-information";
import Image from "next/image";
import { MessageCircle, Eye, SquarePen } from "lucide-react";
import CardWrapperPost from "./card-wrapper-post";
import { use } from "react";
import { auth } from "@/auth";
import { getUserDetails } from "@/data/user";

const DashboardContent = () => {
  const session = use(auth());
  const user = session?.user.id ? use(getUserDetails(session.user.id)) : null;
  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-24 md:grid-cols-2">
        <CardWrapperAvatar
          headerName={session ? session.user.name : null}
          headerRole={
            session?.user.role === "user" ? "Writer / Author" : "Admin"
          }
        >
          <p className="text-sm text-slate-500">
            <span className="text-xl font-semibold text-black">
              {user ? user._count.Post : "0"}
            </span>{" "}
            Total Post
          </p>
        </CardWrapperAvatar>
        <div className="grid grid-cols-2 gap-6">
          <CardWrapperInformation headerSrc="/comment.png">
            <p className="text-sm font-medium text-slate-500">Comments</p>
            <p className="text-xl font-semibold">0</p>
          </CardWrapperInformation>
          <CardWrapperInformation headerSrc="/like.png">
            <p className="text-sm font-medium text-slate-500">Total Likes</p>
            <p className="text-xl font-semibold">0</p>
          </CardWrapperInformation>
        </div>
      </div>
      <CardWrapperPost
        cardTitle="Recent Blog"
        cardHref="/dashboard/blog"
        cardLinkTitle="View All"
      >
        <ul className="max-h-60 space-y-3 overflow-y-auto">
          {user?.Post.map((post) => (
            <li key={post.id} className="flex items-center space-x-3">
              <Image
                src={post.image}
                alt="thumbnail blog"
                width={80}
                height={50}
                className="shrink-0 rounded object-cover"
              />
              <div className="min-w-0 flex-1">
                <h2 className="truncate font-semibold select-text">
                  {post.title}
                </h2>
                <div className="mt-1 flex items-center space-x-6 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <MessageCircle className="size-4" />{" "}
                    <span>325 Comments</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="size-4" /> <span>565 Views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <SquarePen className="size-4" /> <span>Edit</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardWrapperPost>
    </div>
  );
};

export default DashboardContent;
