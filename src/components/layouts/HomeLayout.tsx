"use client";

import { MouseEvent, useRef, FC, PropsWithChildren } from "react";
import { HomeHeader } from "@/components/header";
import { HomeFooter } from "@/components/footer";
import { gsap } from "gsap";
const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  const gradientRef = useRef<HTMLDivElement>(null);

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

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
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

  return (
    <div
      className="flex flex-col h-screen"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
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
