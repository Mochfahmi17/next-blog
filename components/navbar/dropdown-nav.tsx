"use client";
import { Category } from "@prisma/client";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type DropdownNavProps = {
  title: string;
  category: Category[] | undefined;
};

const DropdownNav = ({ title, category }: DropdownNavProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <li
      ref={ref}
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      className="flex cursor-pointer flex-col items-end justify-end gap-1 md:relative md:items-start md:justify-normal"
    >
      <div className="flex w-full items-center justify-end gap-1 p-2 hover:bg-slate-50 md:p-0 md:hover:bg-transparent">
        {title}{" "}
        <ChevronDown
          className={clsx("size-4 transition-all", {
            "rotate-180": isDropdownOpen,
          })}
        />
      </div>
      {isDropdownOpen && (
        <div className="top-full w-full md:absolute md:mt-3">
          <ul className="w-full rounded bg-slate-50 whitespace-nowrap md:min-w-48 md:overflow-hidden md:bg-white md:shadow-2xl">
            {category?.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/explore/category/${item.name}`}
                  className="block w-full p-2 hover:bg-slate-100 hover:text-black md:hover:bg-slate-50"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default DropdownNav;
