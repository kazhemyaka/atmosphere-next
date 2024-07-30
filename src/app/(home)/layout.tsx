import type { FC, PropsWithChildren } from "react";
import { HomeLayout } from "@/components/layouts";

const HomePageLayout: FC<PropsWithChildren> = ({ children }) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default HomePageLayout;
