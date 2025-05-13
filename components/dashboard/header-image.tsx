import Image, { StaticImageData } from "next/image";

type HeaderImageProps = {
  src: string | StaticImageData;
};

const HeaderImage = ({ src }: HeaderImageProps) => {
  return (
    <div className="relative h-6 w-28">
      <Image
        src={src}
        alt="blog"
        width={200}
        height={200}
        className="absolute -top-20 right-4"
      />
    </div>
  );
};

export default HeaderImage;
