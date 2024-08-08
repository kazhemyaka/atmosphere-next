import type { FC } from "react";
import { zilla_slab } from "@/config/fonts";

interface TitleProps {
  text: string;
  city: string;
}

const Title: FC<TitleProps> = ({ text, city }) => {
  return (
    <h1
      className={`${zilla_slab.className} text-4xl sm:text-5xl font-bold mb-4`}
    >
      {text}{" "}
      <span className="bg-gradient-to-bl from-dodger-blue to-cyan-600 bg-clip-text text-transparent">
        {city}
      </span>
    </h1>
  );
};
export default Title;
