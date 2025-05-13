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
import { resetPasswordSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState, useTransition } from "react";
import { resetPassword } from "@/lib/actions/reset-password";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof resetPasswordSchema>) => {
    startTransition(async () => {
      try {
        const data = await resetPassword(values);

        if (!data.success) {
          toast.error(data.message);
          return;
        }

        toast.success(data.message);
        router.push("/login");
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      }
    });
  };
  return (
    <CardWrapper
      headerTitle="Create a new password"
      headerSubTitle="You're almost there! Please choose a new password for your account. Type it in both fields below to confirm."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="******"
                        disabled={isPending}
                        {...field}
                        className="focus-visible:ring-2 focus-visible:ring-slate-700"
                      />
                      <div
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-600"
                      >
                        {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            disabled={isPending}
            className="w-full cursor-pointer"
          >
            {isPending ? "Registering your details..." : "Reset password"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default ResetPasswordForm;
