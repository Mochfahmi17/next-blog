import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { use } from "react";
import { getCategories } from "@/data/category";
import clsx from "clsx";

const CategorySidebar = ({ categoryName }: { categoryName?: string }) => {
  const categories = use(getCategories());
  return (
    <aside className="top-20 md:sticky">
      <p className="mb-3 text-lg font-bold">Category</p>
      <div>
        <Card className="overflow-hidden p-0">
          <CardContent className="h-[450px] overflow-auto px-0">
            <ul>
              <li className="hover:bg-slate-100">
                <Link href="/explore" className="inline-block w-full px-6 py-3">
                  All
                </Link>
              </li>
              {categories?.map((category) => (
                <li
                  key={category.id}
                  className={clsx("hover:bg-slate-100", {
                    "bg-slate-100": categoryName === category.name,
                  })}
                >
                  <Link
                    href={`/explore/category/${category.name}`}
                    className="inline-block w-full px-6 py-3"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
};

export default CategorySidebar;
