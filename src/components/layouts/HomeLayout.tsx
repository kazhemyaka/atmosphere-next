"use client";

import { useRef, type FC, type PropsWithChildren } from "react";
import { HomeHeader } from "@/components/header";
import { HomeFooter } from "@/components/footer";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  const gradientRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const handleMouseEnter = () => {
      if (gradientRef.current) {
        gsap.to(gradientRef.current, {
          opacity: 0.3,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    };

    const handleMouseLeave = () => {
      if (gradientRef.current) {
        gsap.to(gradientRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (gradientRef.current) {
        const x = e.clientX;
        const y = e.clientY;

        gsap.to(gradientRef.current, {
          left: x - 150,
          top: y - 150,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <div className="flex flex-col h-screen">
      <div
        ref={gradientRef}
        className="fixed w-[300px] h-[300px] rounded-full bg-gradient-to-r from-sky-500 to-dodger-blue blur-3xl pointer-events-none opacity-0"
        style={{ left: "-150px", top: "-150px" }}
      />
      <HomeHeader />
      <main className="flex-grow">{children}</main>
      <HomeFooter />
    </div>
  );
};

export default HomeLayout;
