import { getLatestBlogs } from "@/data/post";
import getExcerpt from "@/lib/utils/getExcerpt";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

const Hero = () => {
  const blogs = use(getLatestBlogs()) ?? [];

  const heroBlog = blogs[0];
  return (
    <section className="pt-20 pb-8">
      <div className="container mx-auto px-[3%]">
        <div className="relative h-[85vh] overflow-hidden rounded-3xl md:h-[75vh] lg:h-screen">
          <Image
            src={heroBlog.image}
            alt={heroBlog.title}
            fill
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative flex h-full flex-col justify-end px-4 pb-8 text-white md:p-8">
            <p className="mb-2 font-medium">{heroBlog.category.name}</p>
            <div className="w-full space-y-6">
              <div className="group flex justify-between">
                <Link
                  href={`/blog/${heroBlog.slug}`}
                  title={heroBlog.title}
                  className="inline-block w-4/5"
                >
                  <h1 className="line-clamp-3 text-3xl font-extrabold md:line-clamp-2 md:text-5xl">
                    {heroBlog.title}
                  </h1>
                </Link>
                <ArrowRight className="size-12 transition-all group-hover:translate-x-2 md:size-16" />
              </div>
              <p className="line-clamp-3 text-ellipsis md:w-3/4">
                {getExcerpt(heroBlog.content)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
