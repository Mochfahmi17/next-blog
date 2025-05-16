import AboutBlog from "@/components/about/about-blog";
import AboutFindHere from "@/components/about/about-find-here";
import AboutMe from "@/components/about/about-me";
import AboutUs from "@/components/about/about-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - blog",
  description:
    "Learn more about blog, our mission, values, and the team behind our success.",
};

export default function AboutUsPage() {
  return (
    <main className="animate__animated animate__fadeIn">
      <AboutUs />
      <AboutBlog />
      <AboutMe />
      <AboutFindHere />
    </main>
  );
}
