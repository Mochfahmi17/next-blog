"use client";
import { usePathname } from "next/navigation";
import { authRoutes } from "@/routes";
import { Session } from "next-auth";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../logo";
import AuthButton from "./auth-button";
import MobileNav from "./mobile-nav";
import DesktopNav from "./desktop-nav";
import { Category } from "@prisma/client";

type NavbarProps = {
  session: Session | null;
  category: Category[] | undefined;
};

const Navbar = ({ session, category }: NavbarProps) => {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  if (authRoutes.includes(pathname) || pathname.startsWith("/dashboard"))
    return null;
  return (
    <div className="fixed top-0 right-0 left-0 z-50 bg-white py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-[3%] text-slate-700">
        <Logo src="/logo.png" />
        <DesktopNav category={category} />
        <AuthButton session={session} />

        {/* Toggle button */}
        <div onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </div>

        {/* mobile */}
        <MobileNav
          open={open}
          setOpen={setOpen}
          session={session}
          category={category}
        />
      </div>
    </div>
  );
};

export default Navbar;
