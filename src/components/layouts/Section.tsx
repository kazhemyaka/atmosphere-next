import type { FC, PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

interface SectionProps extends PropsWithChildren {
  className?: string;
}

const Section: FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={cn("px-5 sm:px-10", className)}>{children}</section>
  );
};

export default Section;
