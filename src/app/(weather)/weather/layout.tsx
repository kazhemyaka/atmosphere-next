import type { FC, PropsWithChildren } from "react";
import { WeatherLayout } from "@/components/layouts";

const WeatherPageLayout: FC<PropsWithChildren> = ({ children }) => {
  return <WeatherLayout>{children}</WeatherLayout>;
};

export default WeatherPageLayout;
