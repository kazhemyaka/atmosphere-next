import type { FC, PropsWithChildren } from "react";

import { HomeHeader } from "@/components/header";
import { HomeFooter } from "@/components/footer";

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <HomeHeader />
      <main className="flex-grow">{children}</main>
      <HomeFooter />
    </div>
  );
};

export default HomeLayout;
