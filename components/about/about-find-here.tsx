import CardContent from "./card-content";

const AboutFindHere = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-[3%]">
        <h2 className="text-center text-3xl font-bold">
          What You&apos;ll Find Here
        </h2>
        <p className="text-center">
          We cover a wide range of topics, with something for everyone.
        </p>
        <div className="mt-20 grid gap-8 md:grid-cols-4">
          <CardContent
            src="/yoga.jpg"
            title="Lifestyle"
            description="Tips on personal growth, mental health, daily routines, and modern living. We share practical advice and insights you can apply to your everyday life."
          />
          <CardContent
            src="/tech.jpg"
            title="Technology"
            description="Fresh updates and perspectives on the fast-paced tech world — including gadget reviews, trending apps, and deep dives into topics like AI, cybersecurity, and digital life."
          />
          <CardContent
            src="/sport.jpg"
            title="Sports"
            description="Coverage and opinions on sports from around the globe. Whether it's football, fitness tips, or the latest match highlights — you'll find it here."
          />
          <CardContent
            src="/other.jpg"
            title="And More"
            description="From entertainment and opinions to fun reads and inspirational stories, our blog grows as we do. We’re always exploring new topics that spark curiosity."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutFindHere;
