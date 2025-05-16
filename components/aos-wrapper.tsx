"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AOSWrapper = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 300,
      easing: "ease-in-out",
    });
  }, []);

  return null;
};

export default AOSWrapper;
