import Explore from "@/components/explore/explore";
import { getCategoryByName } from "@/data/category";
import { Metadata } from "next";

type ExploreCategoryPageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: ExploreCategoryPageProps): Promise<Metadata> {
  const slug = params.slug;
  const category = await getCategoryByName(slug);

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
  const category = params.slug;
  return (
    <main className="animate__animated animate__fadeIn">
      <Explore category={category} />
    </main>
  );
}
