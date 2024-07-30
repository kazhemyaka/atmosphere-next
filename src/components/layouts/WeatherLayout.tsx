import type { FC, PropsWithChildren } from "react";
import { WeatherHeader } from "@/components/header";

const WeatherLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <WeatherHeader />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default WeatherLayout;
