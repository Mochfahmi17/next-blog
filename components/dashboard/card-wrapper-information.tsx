import { Card, CardContent, CardHeader } from "@/components/ui/card";
import HeaderImage from "./header-image";
import { StaticImageData } from "next/image";

type CardWrapperInformationProps = {
  headerSrc: string | StaticImageData;
  children: React.ReactNode;
};

const CardWrapperInformation = ({
  headerSrc,
  children,
}: CardWrapperInformationProps) => {
  return (
    <Card className="w-full md:w-52">
      <CardHeader>
        <HeaderImage src={headerSrc} />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardWrapperInformation;
