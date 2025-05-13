import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Newsletter = () => {
  return (
    <div className="md:col-span-4">
      <h4 className="mb-4 text-xl font-semibold">Newsletter</h4>
      <p className="mb-4">
        Get the latest updates delivered straight to your email! Subscribe to
        the newsletter to receive articles, tips, and exclusive content on
        technology and digital lifestyle every week.
      </p>
      <form action="" className="relative">
        <div className="flex items-center">
          <Input
            type="email"
            placeholder="Email"
            className="bg-white py-5 pr-28 text-slate-700 focus-visible:border-0 focus-visible:ring-0"
          />
          <Button
            type="submit"
            size="lg"
            variant="destructive"
            className="absolute right-0 h-full cursor-pointer"
          >
            Subscribe
          </Button>
        </div>
      </form>
      <div className="mt-4">
        <div className="space-y-2">
          <h5 className="text-lg font-semibold">Social Media</h5>
          <p>
            Find me on various social media platforms for the latest content
            updates, creations, and interesting things about technology and
            digital lifestyle. Feel free to connect, start a conversation, or
            simply say hello!
          </p>
        </div>
        <ul className="mt-6 list-item space-y-4 text-sm">
          <li>
            <Link
              href="https://instagram.com/fahmi_art17"
              target="_blank"
              className="flex w-fit items-center gap-2"
            >
              <FaInstagram className="size-5" /> @fahmi_art17
            </Link>
          </li>
          <li>
            <Link
              href="https://web.facebook.com/ppi.fahmi"
              target="_blank"
              className="flex w-fit items-center gap-2"
            >
              <FaFacebook className="size-5" /> Muhammad Fahmi
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Mochfahmi17"
              target="_blank"
              className="flex w-fit items-center gap-2"
            >
              <FaGithub className="size-5" /> Mochfahmi17
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Newsletter;
