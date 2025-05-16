import { auth } from "@/auth";
import DashboardNavbar from "@/components/dashboard/dashboard-navbar";
import SidebarDashboard from "@/components/dashboard/sidebar-dashboard";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Metadata } from "next";
import { use } from "react";

export const metadata: Metadata = {
  title: "Dashboard | blog",
  description:
    "Easily manage posts and check your blog statistics on the Blog Dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = use(auth());
  return (
    <main>
      <SidebarProvider>
        <SidebarDashboard />
        <section className="w-full bg-slate-50 px-2">
          <div className="flex py-5 md:items-center">
            <SidebarTrigger /> | <DashboardNavbar session={session} />
          </div>
          {children}
        </section>
      </SidebarProvider>
    </main>
  );
}
