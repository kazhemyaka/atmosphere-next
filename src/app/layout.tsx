import type { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";

import "@/styles/globals.css";
import { nunito } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Atmosphere",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
