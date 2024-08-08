import type { FC } from "react";
import WeatherInfo from "./WeatherInfo";
import { cn } from "@/utils/cn";

interface WeatherInfosProps {
  weatherInfos: {
    icon: JSX.Element;
    desc: string;
    value: string;
  }[];
  center: boolean;
}

const WeatherInfos: FC<WeatherInfosProps> = ({ weatherInfos, center }) => {
  return (
    <ul className={cn("flex gap-4 flex-wrap", center && "justify-center")}>
      {weatherInfos.map((info, index) => (
        <WeatherInfo key={index} {...info} />
      ))}
    </ul>
  );
};
export default WeatherInfos;
