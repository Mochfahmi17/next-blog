import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ src }: { src: string }) => {
  return (
    <Link href="/" className="inline">
      <Image
        src={src}
        alt="logo"
        width={80}
        height={50}
        priority
        className="object-cover object-center"
      />
    </Link>
  );
};

export default Logo;
