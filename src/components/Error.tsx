import { FC, ReactNode } from "react";
import { Section } from "@/components/layouts";

interface ErrorProps {
  children: ReactNode;
}

const Error: FC<ErrorProps> = ({ children }) => {
  return (
    <Section className="h-full flex flex-col gap-5 py-5 xl:h-full bg-gradient-to-t from-red-100 to-white">
      <h1 className="text-red-500 text-6xl font-bold">Error!</h1>
      <p className="text-4xl">{children}</p>
    </Section>
  );
};

export default Error;
