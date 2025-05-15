import Link from "next/link";
import { Button } from "../ui/button";
import clsx from "clsx";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
};

const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="mt-8 flex justify-center gap-2">
      {pageNumbers.map((page) => (
        <Button
          key={page}
          size="icon"
          asChild
          className={clsx({
            "bg-white text-black hover:bg-black hover:text-white":
              page !== currentPage,
          })}
        >
          <Link href={`?page=${page}`}>{page}</Link>
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
