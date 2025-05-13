"use client";
import { LayoutDashboardIcon, Newspaper } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import SidebarCollapsibleItem from "@/components/dashboard/sidebar-collapseible-item";
import SidebarItem from "@/components/dashboard/sidebar-item";

const data = {
  links: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
  ],
  navMain: [
    {
      title: "Blog",
      url: "#",
      icon: Newspaper,
      isActive: false,
      items: [
        {
          title: "Manage Blog",
          url: "/dashboard/blog",
        },
        {
          title: "Create",
          url: "/dashboard/blog/create",
        },
      ],
    },
  ],
};

const SidebarDashboard = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b bg-white">
        <Link href="/" className="px-2 py-3">
          <Image src="/logo.png" alt="logo" width={70} height={25} />
        </Link>
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarItem items={data.links} />
            <SidebarCollapsibleItem items={data.navMain} />
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarDashboard;
