import clsx from "clsx";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import DropdownNav from "./dropdown-nav";
import { Category } from "@prisma/client";

type MobileNavProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  session: Session | null;
  category: Category[] | undefined;
};

const MobileNav = ({ open, setOpen, session, category }: MobileNavProps) => {
  return (
    <div
      className={clsx(
        "mt-2 flex w-full cursor-pointer flex-col gap-2 rounded-md px-2 py-6 text-right md:hidden",
        {
          flex: open,
          hidden: !open,
        },
      )}
    >
      <nav>
        <ul className="flex flex-col font-semibold">
          <li onClick={() => setOpen(false)}>
            <Link
              href="#"
              className="block w-full rounded-sm px-2 py-2 hover:bg-slate-50"
            >
              Home
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link
              href="#"
              className="block w-full rounded-sm px-2 py-2 hover:bg-slate-50"
            >
              Explore
            </Link>
          </li>
          <DropdownNav title="Category" category={category} />
          <li onClick={() => setOpen(false)}>
            <Link
              href="/about-us"
              className="block w-full rounded-sm px-2 py-2 hover:bg-slate-50"
            >
              About Us
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link
              href="#"
              className="block w-full rounded-sm px-2 py-2 hover:bg-slate-50"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-end gap-4">
        {session ? (
          <Button asChild onClick={() => setOpen(false)}>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        ) : (
          <>
            <Button
              variant="ghost"
              size="sm"
              asChild
              onClick={() => setOpen(false)}
            >
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild onClick={() => setOpen(false)}>
              <Link href="/register">Sign up</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
