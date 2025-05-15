"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Bell } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

const DashboardNavbar = ({ session }: { session: Session | null }) => {
  const handleSignOut = () => {
    const confirmed = confirm("Are you sure want to logout?");

    if (!confirmed) return;

    signOut();
  };
  return (
    <div className="flex w-full items-center justify-between space-x-2 px-2">
      <div className="relative flex w-fit items-center">
        <Search className="absolute top-1/2 ml-2 size-4 -translate-y-1/2 text-gray-400 md:size-5" />
        <Input
          size={30}
          placeholder="Search for anything"
          className="border-0 bg-transparent pl-8 placeholder-gray-300 shadow-none placeholder:text-sm focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-slate-700 md:placeholder:text-base"
        />
      </div>
      <div className="flex items-center space-x-4 text-xs text-gray-500">
        <Button
          type="button"
          size="icon"
          variant="ghost"
          aria-label="Notifications"
          className="relative rounded-full p-0"
        >
          <Bell className="size-5" />{" "}
          <span className="absolute top-0 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
            0
          </span>
        </Button>
        <div className="flex items-center space-x-1">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="rounded-full p-0"
          >
            <Avatar className="bg-slate-100">
              <AvatarImage
                src={session?.user.image || "/user.png"}
                alt={session?.user.name || "User"}
                width={50}
                height={50}
              />
            </Avatar>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="transition-all data-[state=open]:rotate-180"
            >
              <ChevronDown className="size-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4 w-52">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href="/dashboard/account" className="w-full">
                    My Account
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="h-fit w-full cursor-pointer text-left"
                  >
                    Log out
                  </button>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
