import Explore from "@/components/explore/explore";
import { getCategoryByName } from "@/data/category";
import { Metadata } from "next";
import { use } from "react";

type ExploreCategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ExploreCategoryPageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const slugdecode = decodeURIComponent(slug);
  const category = await getCategoryByName(slugdecode);

  if (!category) {
    return {
      title: "Category Not Found | blog",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${category.name} - Explore Articles | blog`,
    description: `Discover articles and latest updates in the ${category.name} category at blog.`,
  };
}

export default function ExploreCategoryPage({
  params,
}: ExploreCategoryPageProps) {
  const categoryEncode = use(params).slug;
  const categoryDecode = decodeURIComponent(categoryEncode);
  return (
    <main className="animate__animated animate__fadeIn">
      <Explore category={categoryDecode} />
    </main>
  );
}
