"use client";

import type { FC } from "react";
import Search from "@/components/Search";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Fade as Hamburger } from "hamburger-react";
import Image from "next/image";

const elements = [
  {
    name: "Now",
    href: "now",
  },
  {
    name: "Hourly",
    href: "hourly",
  },
  {
    name: "Daily",
    href: "daily",
  },
];

const WeatherHeader: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const { city } = useParams();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <header className="bg-white flex items-center justify-between py-8 px-5 sm:px-10 gap-4">
      <div className="flex align-center gap-4">
        <Link href="/">
          <Image
            src="/images/logos/logo.svg"
            alt="Logo"
            className="h-10 w-auto"
            width={40}
            height={40}
          />
        </Link>
        <Search />
      </div>
      <div className="md:hidden z-[1002]">
        <Hamburger toggled={isOpen} toggle={setOpen} rounded />
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-white z-[1001] overflow-hidden md:hidden">
          <nav className="h-full flex items-center justify-center">
            <ul className="flex items-center gap-5 flex-col">
              {elements.map((element, index) => (
                <li key={index}>
                  <Link
                    href={`/weather/${city || ""}/${element.href}/`}
                    className="text-2xl hover:text-dodger-blue transition"
                    onClick={() => setOpen(false)}
                  >
                    {element.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-5">
          {elements.map((element, index) => (
            <li key={index}>
              <Link
                href={`/weather/${city || ""}/${element.href}/`}
                className="text-base hover:text-dodger-blue transition"
              >
                {element.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default WeatherHeader;
