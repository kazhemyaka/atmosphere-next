"use client";

import type { FC } from "react";
import { Section } from "@/components/layouts";
import { useWeather } from "@/context/weather";
import { zilla_slab } from "@/config/fonts";

const Page: FC = () => {
  const { weatherData } = useWeather();

  return (
    <Section>
      <h1
        className={`${zilla_slab.className} text-4xl sm:text-5xl font-bold mb-4`}
      >
        Weather in{" "}
        <span className="bg-gradient-to-bl from-dodger-blue to-cyan-600 bg-clip-text text-transparent">
          {weatherData?.location.name}
        </span>
      </h1>
    </Section>
  );
};

export default Page;
