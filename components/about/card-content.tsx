import Image from "next/image";

type CardContentProps = {
  title: string;
  src: string;
  description: string;
};

const CardContent = ({ title, src, description }: CardContentProps) => {
  return (
    <div className="group relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-md shadow-md">
      <Image
        src={src}
        alt="Lifestyle"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40 transition-all group-hover:backdrop-blur-sm"></div>
      <div className="relative space-y-2 px-2 text-center text-white">
        <h5 className="text-3xl font-semibold">{title}</h5>
        <p className="animate-fadeIn hidden text-sm group-hover:block">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardContent;
