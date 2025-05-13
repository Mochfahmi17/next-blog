import Link from "next/link";
import { Button } from "../ui/button";

type HeaderListBlogProps = {
  title: string;
  href?: string;
  linkTitle?: string;
};

const HeaderListBlog = ({ title, href, linkTitle }: HeaderListBlogProps) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-semibold">{title}</h3>
      {href && (
        <Button
          variant="outline"
          asChild
          className="border-2 border-black hover:bg-black hover:text-white"
        >
          <Link href={href}>{linkTitle}</Link>
        </Button>
      )}
    </div>
  );
};

export default HeaderListBlog;
