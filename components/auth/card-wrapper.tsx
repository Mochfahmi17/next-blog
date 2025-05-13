import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Header from "@/components/auth/header";
import Social from "@/components/auth/social";
import BackButton from "./back-button";

type CardWrapperProps = {
  headerTitle: string;
  headerSubTitle: string;
  children: React.ReactNode;
  backButtonText?: string;
  backButtonHref?: string;
  backButtonLabel?: string;
  showSocial?: boolean;
};

const CardWrapper = ({
  headerTitle,
  headerSubTitle,
  children,
  backButtonText,
  backButtonHref,
  backButtonLabel,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-full border-none shadow-none md:w-[400px]">
      <CardHeader>
        <Header title={headerTitle} subTitle={headerSubTitle} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <div className="flex w-full flex-col space-y-6">
            <div className="before:wfull text-muted-foreground border-muted-foreground flex items-center justify-center gap-4 text-sm before:flex-1 before:border-b before:content-[''] after:flex-1 after:border-b after:content-['']">
              Or login with
            </div>
            <Social />
          </div>
        </CardFooter>
      )}
      <CardFooter>
        <BackButton
          text={backButtonText}
          href={backButtonHref}
          label={backButtonLabel}
        />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
