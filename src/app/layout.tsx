import type { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
import { WeatherProvider } from "@/context/weather";

import "@/styles/globals.css";
import { nunito } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Atmosphere",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <WeatherProvider>{children}</WeatherProvider>
      </body>
    </html>
  );
};

export default RootLayout;
