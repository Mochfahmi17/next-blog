"use client";
import { Card } from "@/components/ui/card";
import { contactSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTransition } from "react";
import { toast } from "sonner";
import { sendContactMessage } from "@/lib/actions/contact";
import ContactFormFields from "@/components/contact/contact-form-fields";
import ContactImage from "@/components/contact/contact-image";
import ContactInformation from "./contact-information";

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
              <ContactFormFields
                form={form}
                isPending={isPending}
                onSubmit={onSubmit}
              />
            </Card>
          </div>
          <div className="self-center md:col-span-6">
            <Card className="border-0 shadow-none">
              <ContactImage />
              <ContactInformation />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
