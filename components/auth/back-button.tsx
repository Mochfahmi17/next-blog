import { Button } from "@/components/ui/button";
import Link from "next/link";

type BackButtonProps = {
  text?: string;
  href?: string;
  label?: string;
};

const BackButton = ({ text, href, label }: BackButtonProps) => {
  return (
    <div className="flex w-full items-center justify-center text-sm">
      {text && <p className="text-muted-foreground text-center">{text}</p>}
      <Button size="sm" variant="link" asChild className="font-normal">
        {href && (
          <Link href={href} className="font-semibold text-slate-800">
            {label}
          </Link>
        )}
      </Button>
    </div>
  );
};

export default BackButton;
