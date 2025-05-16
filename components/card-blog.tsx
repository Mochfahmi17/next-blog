import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { Category, Post, User } from "@prisma/client";
import getExcerpt from "@/lib/utils/getExcerpt";
import moment from "moment";
import Link from "next/link";

type CardBlogProps = {
  blog: Post & { category: Category; author: User };
  index: number;
};

const CardBlog = ({ blog, index }: CardBlogProps) => {
  return (
    <Card
      data-aos="fade-down"
      data-aos-delay={index * 200}
      className="w-full border-0 shadow-none"
    >
      <CardHeader className="px-0">
        <Link href={`/blog/${blog.slug}`} title={blog.title}>
          <Image
            src={blog.image}
            alt={blog.title}
            width={500}
            height={20}
            className="aspect-[3/2] rounded-3xl object-cover object-center"
          />
        </Link>
      </CardHeader>
      <CardContent className="space-y-2 px-0">
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
      <CardFooter className="line-clamp-1 flex items-center gap-2 px-0">
        <Avatar>
          <Image
            src={blog.author.image || "/user.png"}
            alt={blog.author.name}
            width={50}
            height={50}
            className="rounded-full object-cover object-center"
          />
        </Avatar>
        <div
          title={blog.author.name}
          className="flex w-full items-center justify-between text-sm font-medium text-gray-700"
        >
          <p className="max-w-32 truncate">{blog.author.name}</p>
          <span className="whitespace-nowrap">
            • {moment(blog.createdAt).format("LLL")}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardBlog;
