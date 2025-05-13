import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-[3%]">
        <div className="grid items-center gap-8 text-slate-700 md:grid-cols-12 md:gap-4">
          <div className="md:col-span-6">
            <h3 className="text-3xl font-bold">Mochammad Fahmi Kurnia Sandi</h3>
            <p>Owner</p>
            <p className="mt-4">
              Hello! I am the writer and manager of this blog, which primarily
              focuses on technology and digital lifestyle topics. As someone
              deeply interested in the development of technology and how it
              impacts our daily lives, I strive to provide up-to-date, relevant,
              and easy-to-understand information. Through this blog, I aim to
              share various insights, tips, guides, and articles that are not
              only useful but also help readers better understand and make the
              most of technology in their lives. I believe that with the right
              information, presented in an easily digestible manner, anyone can
              become more savvy in utilizing technology to improve their quality
              of life, both in the digital world and in everyday life.
            </p>
          </div>
          <div className="justify-self-center md:col-span-6">
            <Image
              src="/about-me.png"
              alt="About Me"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
