import { FC, PropsWithChildren } from "react";
import { Metadata } from "next";
import { WeatherProvider } from "@/context/weather";

import "@/styles/globals.css";
import { nunito } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Atmosphere",
  icons: {
    icon: "/images/favicon/logo.ico",
  },
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
