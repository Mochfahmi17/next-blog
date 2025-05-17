import Explore from "@/components/explore/explore";
import { Metadata } from "next";
import { use } from "react";

type ExplorePageProps = {
  searchParams: Promise<{ page?: string }>;
};

export const metadata: Metadata = {
  title: "Explore - Discover New Content and Trends | blog",
  description:
    "Explore the latest articles, trends, and updates curated just for you at blog. Find inspiring content and new ideas every day.",
};

export default function ExplorePage({ searchParams }: ExplorePageProps) {
  return (
    <main className="animate__animated animate__fadeIn">
      <Explore searchParams={use(searchParams)} />
    </main>
  );
}
