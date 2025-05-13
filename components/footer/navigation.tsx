import Link from "next/link";

const Navigation = () => {
  return (
    <div className="md:col-span-3">
      <h4 className="mb-4 text-xl font-semibold">Navigation</h4>
      <ul className="list-item space-y-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#">Explore</Link>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
