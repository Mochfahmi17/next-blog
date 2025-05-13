import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { GiPlainCircle } from "react-icons/gi";
import Image from "next/image";
import { Category, Post, User } from "@prisma/client";
import getExcerpt from "@/lib/utils/getExcerpt";
import moment from "moment";
import Link from "next/link";

type CardBlogProps = {
  blog: Post & { category: Category; author: User };
};

const CardBlog = ({ blog }: CardBlogProps) => {
  return (
    <Card className="w-sm border-0 shadow-none">
      <CardHeader>
        <Link href={`/blog/${blog.slug}`} title={blog.title}>
          <Image
            src={blog.image}
            alt={blog.title}
            width={400}
            height={20}
            className="aspect-[3/2] rounded-3xl object-cover object-center"
          />
        </Link>
      </CardHeader>
      <CardContent className="space-y-2">
        <Link
          href={`/blog/${blog.slug}`}
          title={blog.title}
          className="inline-block"
        >
          <h2 className="line-clamp-2 text-xl font-bold text-ellipsis">
            {blog.title}
          </h2>
        </Link>
        <p className="line-clamp-3 text-sm text-ellipsis text-slate-500">
          {getExcerpt(blog.content)}
        </p>
      </CardContent>
      <CardFooter className="line-clamp-1 flex items-center gap-2">
        <Avatar>
          <Image
            src={blog.author.image || "/people.jpeg"}
            alt={blog.author.name}
            width={50}
            height={50}
            className="rounded-full object-cover object-center"
          />
        </Avatar>
        <div
          title={blog.author.name}
          className="flex items-center gap-1 text-sm font-medium text-gray-700"
        >
          <p className="max-w-32 truncate">{blog.author.name}</p>
          <span className="whitespace-nowrap">
            <GiPlainCircle className="size-2 text-black" />
          </span>{" "}
          {moment(blog.createdAt).format("LLL")}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardBlog;
