"use client";
import CardWrapper from "@/components/auth/card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useTransition } from "react";
import { login } from "@/lib/actions/login";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    startTransition(async () => {
      try {
        const data = await login(values);

        if (!data.success) {
          toast.error(data.message);
          return;
        }

        toast.success(data.message);
        router.push("/");
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
          return;
        }
        toast.error("Something went wrong. Please try again.");
      }
    });
  };

  useEffect(() => {
    if (error === "OAuthAccountNotLinked") {
      setTimeout(() => {
        toast.error(
          "This email is already linked to another sign-in method. Please use the original login provider.",
        );
      }, 100);
    }
  }, [error]);
  return (
    <CardWrapper
      headerTitle="Welcome Back"
      headerSubTitle="Enter your email and password to access your account."
      backButtonText="Don't have an account?"
      backButtonLabel="Register now."
      backButtonHref="/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="johndoe@example.com"
                      disabled={isPending}
                      {...field}
                      className="focus-visible:ring-2 focus-visible:ring-slate-700"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="******"
                        disabled={isPending}
                        {...field}
                        className="focus-visible:ring-2 focus-visible:ring-slate-700"
                      />
                      <div
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-600"
                      >
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                      </div>
                    </div>
                  </FormControl>
                  <div className="flex items-center gap-2">
                    <FormMessage />
                    <Button
                      size="sm"
                      variant="link"
                      asChild
                      className="ml-auto w-fit text-sm font-normal"
                    >
                      <Link href="/forgot-password">Forgot password?</Link>
                    </Button>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            disabled={isPending}
            className="w-full cursor-pointer"
          >
            {isPending ? "Please wait a moment..." : "Login"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
