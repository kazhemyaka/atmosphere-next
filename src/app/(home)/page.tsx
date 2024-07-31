import type { FC } from "react";
import { zilla_slab } from "@/config/fonts";
import { Search } from "@/components/search";
import { Section } from "@/components/layouts";

const Home: FC = () => {
  return (
    <Section className="text-center flex flex-col gap-6 h-full justify-center items-center">
      <h1
        className={`text-4xl sm:text-6xl font-bold bg-gradient-to-bl from-dodger-blue to-cyan-600 bg-clip-text text-transparent ${zilla_slab.className}`}
      >
        Discover your city's weather with Atmosphere!
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
