import Contact from "@/components/contact/contact";
import ContactForm from "@/components/contact/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | blog",
  description:
    "Get in touch with blog. We're here to answer your questions, provide support, and help you with any inquiries.",
};

export default function ContactPage() {
  return (
    <main className="animate__animated animate__fadeIn">
      <Contact />
      <ContactForm />
    </main>
  );
}
