"use client";
import CardWrapper from "@/components/auth/card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { codeSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { otpVerification } from "@/lib/actions/otp-verification";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

const OtpVerificationForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof codeSchema>>({
    resolver: zodResolver(codeSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = (values: z.infer<typeof codeSchema>) => {
    startTransition(async () => {
      try {
        const data = await otpVerification(values);

        if (!data.success) {
          toast.error(data.message);
          return;
        }

        toast.success(data.message);
        router.push("/reset-password");
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
      headerTitle="Enter confirmation code"
      headerSubTitle="We sent a code to your email."
      backButtonLabel="Back"
      backButtonHref="/forgot-password"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex w-full justify-center">
                      <InputOTP maxLength={4} pattern="^[0-9]*$" {...field}>
                        <InputOTPGroup>
                          <div className="flex w-full items-center justify-between gap-2">
                            <InputOTPSlot
                              index={0}
                              className="rounded-sm border data-[active=true]:ring-2 data-[active=true]:ring-slate-800"
                            />
                            <InputOTPSlot
                              index={1}
                              className="rounded-sm border data-[active=true]:ring-2 data-[active=true]:ring-slate-800"
                            />
                            <InputOTPSlot
                              index={2}
                              className="rounded-sm border data-[active=true]:ring-2 data-[active=true]:ring-slate-800"
                            />
                            <InputOTPSlot
                              index={3}
                              className="rounded-sm border data-[active=true]:ring-2 data-[active=true]:ring-slate-800"
                            />
                          </div>
                        </InputOTPGroup>
                      </InputOTP>
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
            {isPending ? "Please wait a moment..." : "Continue"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default OtpVerificationForm;
