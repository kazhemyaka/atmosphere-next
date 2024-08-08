"use client";

import { FC, useRef } from "react";
import { zilla_slab } from "@/config/fonts";
import Search from "@/components/Search";
import { Section } from "@/components/layouts";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

const Home: FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (titleRef.current) {
      const title = new SplitType(titleRef.current, {
        types: "words",
      });

      gsap.from(title.words, {
        y: "100%",
        opacity: 0,
        duration: 0.35,
        ease: "circ.out",
        stagger: 0.1,
        onStart: () => {
          if (titleRef.current) {
            titleRef.current.classList.remove("opacity-0");
          }
        },
      });
    }
  }, []);

  return (
    <Section className="text-center flex flex-col gap-6 h-full justify-center items-center relative overflow-hidden">
      <h1
        ref={titleRef}
        className={`opacity-0 text-dodger-blue text-4xl sm:text-6xl font-bold ${zilla_slab.className}`}
      >
        Discover your city&apos;s weather with Atmosphere!
      </h1>
      <p className="w-4/5 sm:w-6/12">
        Explore the latest weather updates for any city with Atmosphere. Just
        type in the name of your city and get accurate, real-time weather
        information at your fingertips!
      </p>
      <Search />
    </Section>
  );
};

export default Home;
