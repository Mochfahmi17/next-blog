import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Header from "./header";
import Image from "next/image";

type CardWrapperAvatarProps = {
  headerName: string | null | undefined;
  headerRole: string;
  children: React.ReactNode;
};

const CardWrapperAvatar = ({
  headerName,
  headerRole,
  children,
}: CardWrapperAvatarProps) => {
  return (
    <Card className="relative flex h-fit w-full flex-1 shadow-xl">
      <CardHeader>
        <Header name={headerName} role={headerRole} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <Image
        src="/3d-avatar.png"
        alt="avatar"
        width={250}
        height={50}
        className="absolute -top-25 -right-16"
      />
    </Card>
  );
};

export default CardWrapperAvatar;
