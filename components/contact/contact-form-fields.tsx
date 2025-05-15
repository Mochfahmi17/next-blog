import { CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { contactSchema } from "@/schemas";

type ContactFormFieldsProps = {
  form: UseFormReturn<z.infer<typeof contactSchema>>;
  onSubmit: (values: z.infer<typeof contactSchema>) => void;
  isPending: boolean;
};

const ContactFormFields = ({
  form,
  onSubmit,
  isPending,
}: ContactFormFieldsProps) => {
  return (
    <>
      <CardHeader>
        <h2 className="text-2xl font-semibold">Let&apos;s Talk!</h2>
        <p className="border-b-2 pb-4 text-slate-500">
          Get in touch with us using the enquiry from or
          <br /> contact detils below.
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="Email"
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
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Subject"
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
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
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
              size="lg"
              disabled={isPending}
              className="w-full cursor-pointer"
            >
              Send Message
            </Button>
          </form>
        </Form>
      </CardContent>
    </>
  );
};

export default ContactFormFields;
