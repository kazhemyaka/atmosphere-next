import type { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";

import "@/styles/globals.css";
import { nunito } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Atmosphere",
};

interface LayoutProps extends PropsWithChildren {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>{children}</body>
    </html>
  );
};

export default Layout;
