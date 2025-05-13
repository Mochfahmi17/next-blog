import { Session } from "next-auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AuthButton = ({ session }: { session: Session | null }) => {
  return session ? (
    <Button asChild className="hidden md:block">
      <Link href="/dashboard">Dashboard</Link>
    </Button>
  ) : (
    <div className="hidden space-x-4 md:block">
      <Button variant="ghost" asChild>
        <Link href="/login">Log in</Link>
      </Button>
      <Button asChild>
        <Link href="/register">Sign up</Link>
      </Button>
    </div>
  );
};

export default AuthButton;
