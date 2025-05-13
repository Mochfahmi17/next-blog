import { Card, CardContent, CardHeader } from "../ui/card";
import HeaderListBlog from "./header-list-blog";

type CardWrapperPostProps = {
  children: React.ReactNode;
  cardTitle: string;
  cardHref?: string;
  cardLinkTitle?: string;
};

const CardWrapperPost = ({
  children,
  cardHref,
  cardLinkTitle,
  cardTitle,
}: CardWrapperPostProps) => {
  return (
    <Card className="max-w-screen">
      <CardHeader>
        <HeaderListBlog
          title={cardTitle}
          href={cardHref}
          linkTitle={cardLinkTitle}
        />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardWrapperPost;
