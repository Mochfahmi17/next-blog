import { use } from "react";
import Navbar from "./navbar";
import { auth } from "@/auth";
import { getCategories } from "@/data/category";

const NavbarWrapper = () => {
  const session = use(auth());
  const categories = use(getCategories());
  return <Navbar session={session} category={categories} />;
};

export default NavbarWrapper;
