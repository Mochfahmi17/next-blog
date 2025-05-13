"use client";
import Navigation from "@/components/footer/navigation";
import Newsletter from "@/components/footer/newsletter";
import VisionBlog from "@/components/footer/vision-blog";
import { authRoutes } from "@/routes";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (authRoutes.includes(pathname) || pathname.startsWith("/dashboard"))
    return null;
  return (
    <footer className="z-50 bg-black pt-16 text-white">
      <div className="container mx-auto px-[3%]">
        <div className="mb-4 grid grid-cols-1 gap-8 md:grid-cols-12">
          <VisionBlog />
          <Navigation />
          <Newsletter />
        </div>
        <div className="py-6">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
