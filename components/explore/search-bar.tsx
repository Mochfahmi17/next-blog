"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

type SearchBarProps = {
  initialSearch?: string;
};

const SearchBar = ({ initialSearch = "" }: SearchBarProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(initialSearch);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
      params.set("page", "1");
    } else {
      params.delete("search");
    }

    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    setSearch(initialSearch);
  }, [initialSearch]);
  return (
    <div className="relative">
      <Search className="absolute top-1/2 left-2 -translate-y-1/2 text-slate-500" />
      <Input
        value={search}
        onChange={onChange}
        placeholder="Search blogs"
        className="bg-white pl-9 focus-visible:ring-2 focus-visible:ring-slate-700"
      />
    </div>
  );
};

export default SearchBar;
