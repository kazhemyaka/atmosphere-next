"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderNavList from "./HeaderNavList";
import homeHeaderElements from "@/data/homeHeaderElements";

const HomeHeader: FC = () => {
  return (
    <header className="flex items-center justify-between py-6 px-5 sm:px-10">
      <div>
        <Link href="/">
          <Image
            src="/images/logos/logo-big.svg"
            alt="Logo"
            width={189}
            height={56}
          />
        </Link>
      </div>
      <HeaderNavList elements={homeHeaderElements} />
    </header>
  );
};

export default HomeHeader;
