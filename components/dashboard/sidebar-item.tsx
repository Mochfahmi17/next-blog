"use client";
import Link from "next/link";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { type LucideIcon } from "lucide-react";

type SidebarItemProps = {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
  }[];
};

const SidebarItem = ({ items }: SidebarItemProps) => {
  return (
    <>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <Link href={item.url}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );
};

export default SidebarItem;
