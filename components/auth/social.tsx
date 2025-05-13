import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, { redirectTo: DEFAULT_LOGIN_REDIRECT });
  };
  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        variant="outline"
        onClick={() => onClick("google")}
        className="flex-1 cursor-pointer"
      >
        <FcGoogle /> Google
      </Button>
      <Button
        size="lg"
        variant="outline"
        onClick={() => onClick("github")}
        className="flex-1 cursor-pointer"
      >
        <FaGithub /> Github
      </Button>
    </div>
  );
};

export default Social;
