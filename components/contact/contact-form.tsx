"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { contactSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { useTransition } from "react";
import { toast } from "sonner";
import { sendContactMessage } from "@/lib/actions/contact";

const ContactForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof contactSchema>) => {
    startTransition(async () => {
      try {
        const data = await sendContactMessage(values);

        if (!data.success) {
          toast.error(data.message);
        }

        toast.success(data.message);
        form.reset();
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
    });
  };
  return (
    <section className="pt-14 pb-8">
      <div className="container mx-auto px-[3%]">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <Card className="border-0 shadow-none">
              <CardHeader>
                <h2 className="text-2xl font-semibold">Let&apos;s Talk!</h2>
                <p className="border-b-2 pb-4 text-slate-500">
                  Get in touch with us using the enquiry from or
                  <br /> contact detils below.
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
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
            </Card>
          </div>
          <div className="self-center md:col-span-6">
            <Card className="border-0 shadow-none">
              <CardHeader>
                <div className="relative flex h-80 w-full justify-center md:h-[500px]">
                  <Image
                    src="/contact.jpg"
                    alt="Contact"
                    fill
                    className="rounded-md object-cover object-bottom"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 md:px-8">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-2 bg-slate-50 p-5"
                    >
                      <Mail className="size-6 text-blue-500" />
                    </Button>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">Quick Contact</h3>
                      <p className="text-slate-500">
                        Email: mochammadfahmiks@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-2 bg-slate-50 p-5"
                    >
                      <Phone className="size-6 text-blue-500" />
                    </Button>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">Phone Number</h3>
                      <p className="text-slate-500">+62 85157017553</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-2 bg-slate-50 p-5"
                    >
                      <MapPin className="size-6 text-blue-500" />
                    </Button>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">Headquater</h3>
                      <p className="text-slate-500">
                        Jl. Mawar Merah No. 666, Jawa Timur, Surabaya, 60176.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
