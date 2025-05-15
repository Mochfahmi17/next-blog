import Image from "next/image";
import { CardHeader } from "@/components/ui/card";

const ContactImage = () => {
  return (
    <CardHeader>
      <div className="relative flex h-80 w-full justify-center md:h-[500px]">
        <Image
          src="/contact.jpg"
          alt="Contact"
          fill
          className="rounded-md object-cover object-bottom"
        />
      </div>
    </CardHeader>
  );
};

export default ContactImage;
