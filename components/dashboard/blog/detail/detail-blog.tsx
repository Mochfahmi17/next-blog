import { Badge } from "@/components/ui/badge";
import { Category, Post, User } from "@prisma/client";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

type DetailBlogProps = {
  blog: Post & { category: Category; author: User };
};

const DetailBlog = ({ blog }: DetailBlogProps) => {
  return (
    <article className="pt-24 pb-24 md:pt-28">
      <div className="container mx-auto px-[5%] md:px-[10%]">
        <header className="flex flex-col items-center gap-2 text-center">
          <Badge variant="secondary" className="text-sm">
            {blog.category.name}
          </Badge>
          <h1 className="text-2xl font-bold md:text-4xl">{blog.title}</h1>
          <p className="space-x-2 text-sm text-slate-500">
            <span>
              Article by{" "}
              <Link
                href="/penulis/john-doe"
                className="text-blue-500 hover:underline"
              >
                {blog.author.name}
              </Link>
            </span>
            •
            <time dateTime="2025-05-11" aria-label="Tanggal publikasi artikel">
              Published {moment(blog.createdAt).format("LLL")}
            </time>{" "}
          </p>
          <Image
            src={blog.image}
            alt={blog.title}
            width={1024}
            height={300}
            className="mt-8 aspect-video rounded-sm object-cover object-center"
          />
        </header>
        <section className="prose mt-12 max-w-none md:px-[3%]">
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="first-letter:float-left first-letter:mr-1 first-letter:text-5xl first-letter:leading-12 first-letter:font-bold"
          ></div>
        </section>
      </div>
    </article>
  );
};

export default DetailBlog;
