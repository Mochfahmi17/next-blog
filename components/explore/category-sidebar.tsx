import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { use } from "react";
import { getCategories } from "@/data/category";

const CategorySidebar = () => {
  const categories = use(getCategories());
  return (
    <aside className="top-20 md:sticky">
      <p className="mb-3 text-lg font-bold">Category</p>
      <div>
        <Card className="overflow-hidden p-0">
          <CardContent className="px-0">
            <ul>
              {categories?.map((category) => (
                <li key={category.id} className="hover:bg-slate-50">
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
