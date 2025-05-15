import Link from "next/link";
import DropdownNav from "./dropdown-nav";
import { Category } from "@prisma/client";

type DesktopNavProps = {
  category: Category[] | undefined;
};

const DesktopNav = ({ category }: DesktopNavProps) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-6 font-semibold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/explore">Explore</Link>
        </li>
        <DropdownNav title="Category" category={category} />
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
