import type { FC, PropsWithChildren } from "react";

import { HomeHeader } from "@/components/header";

interface HomeLayoutProps extends PropsWithChildren {}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <HomeHeader />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default HomeLayout;
