"use client";

import type { FC } from "react";
import Search from "@/components/Search";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import { weatherHeaderElements } from "@/data";
import HeaderNavList from "./HeaderNavList";

const WeatherHeader: FC = () => {
  const { city } = useParams();

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
      <HeaderNavList elements={weatherHeaderElements} />
    </header>
  );
};

export default WeatherHeader;
