import Image from "next/image";

const AboutBlog = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-[3%]">
        <div className="flex items-center justify-center gap-2 text-center">
          <h2 className="text-4xl font-bold">About</h2>
          <Image
            src="/logo.png"
            alt="logo"
            width={75}
            height={50}
            className="mt-1.5"
          />
        </div>
        <div className="mt-20 grid items-center gap-8 md:grid-cols-12 md:gap-4">
          <div className="md:col-span-6">
            <Image
              src="/about-blog.jpg"
              alt="about blog"
              width={550}
              height={50}
              className="rounded-md object-cover object-center"
            />
          </div>
          <div className="space-y-4 text-slate-600 md:col-span-6">
            <p>
              blog is a website created as a space to share stories,
              information, and inspiration about various aspects of life. Here,
              you&apos;ll find a wide range of topics from technology,
              lifestyle, personal growth, to the simple things we often
              encounter in our daily lives.
            </p>
            <p>
              The purpose of this blog is to be a source of useful and enjoyable
              reading, where each article is presented in a light but
              informative tone. We believe that knowledge can come from
              anywhere, even from simple writings that open our minds and offer
              new perspectives.
            </p>
            <p>
              This blog is intended for readers from all walks of life,
              especially students, university learners, and young professionals
              who are eager for fresh insights, creative ideas, and new ways of
              looking at the world around us. Whether you&apos;re looking for
              practical tips, the latest tech insights, or just something
              inspiring to read, this blog is here for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlog;
