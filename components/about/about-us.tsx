import Image from "next/image";

const AboutUs = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="relative h-96">
          <Image
            src="/about-us.jpg"
            alt="About Us"
            fill
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="relative flex flex-col items-center justify-center gap-4 px-[3%] pt-48 text-center text-white md:px-[10%]">
            <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
            <p className="text-sm md:text-base">
              Welcome to our Blog! Here, we share insightful articles, reviews,
              and tips about technology and lifestyle. Our goal is to make
              technology accessible and easy to understand for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
