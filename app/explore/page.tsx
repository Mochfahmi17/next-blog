import Explore from "@/components/explore/explore";

type ExplorePageProps = {
  searchParams: { page?: string };
};

export default function ExplorePage({ searchParams }: ExplorePageProps) {
  return (
    <main>
      <Explore searchParams={searchParams} />
    </main>
  );
}
