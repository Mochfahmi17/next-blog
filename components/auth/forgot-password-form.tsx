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
import { sendEmailSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { forgotPassword } from "@/lib/actions/forgot-password";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ForgotPasswordForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof sendEmailSchema>>({
    resolver: zodResolver(sendEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof sendEmailSchema>) => {
    startTransition(async () => {
      try {
        const data = await forgotPassword(values);

        if (!data.success) {
          toast.error(data.message);
          return;
        }

        toast.success(data.message);
        router.push("/otp-verification");
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
          return;
        }
        toast.error("Something went wrong. Please try again.");
      }
    });
  };
  return (
    <CardWrapper
      headerTitle="Reset your password"
      headerSubTitle="Forgot your password? Please enter your email and we'll send you a 4-digit code."
      backButtonLabel="Back to login"
      backButtonHref="/login"
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
          </div>
          <Button
            type="submit"
            disabled={isPending}
            className="w-full cursor-pointer"
          >
            {isPending ? "Please wait a moment..." : "Get 4-digit code"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default ForgotPasswordForm;
