import type { FC, PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

interface SectionProps extends PropsWithChildren {
  className?: string;
  onMouseMove?: any;
  ref?: any;
}

const Section: FC<SectionProps> = ({
  children,
  className,
  onMouseMove,
  ref,
}) => {
  return (
    <section
      className={cn("px-5 sm:px-10", className)}
      onMouseMove={onMouseMove}
      ref={ref}
    >
      {children}
    </section>
  );
};

export default Section;
