import Image from "next/image";
import Link from "next/link";

const VisionBlog = () => {
  return (
    <div className="flex flex-col gap-2 md:col-span-5">
      <Link href="/" className="w-fit">
        <Image src="/logo.png" alt="logo" width={75} height={20} />
      </Link>
      <p>
        This blog exists as a space to share insights on technology, personal
        growth, and digital life. We believe that the right information can
        inspire, broaden perspectives, and help anyone grow. Through honest and
        quality writing, we aim to be your companion in learning, working, and
        living a more productive and meaningful life.
      </p>
    </div>
  );
};

export default VisionBlog;
