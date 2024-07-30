"use client";

import { useState, type FC } from "react";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/cn";

const HomeHeader: FC = () => {
  const [isOpen, setOpen] = useState(false);

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
      <div className="md:hidden z-50">
        <Hamburger toggled={isOpen} toggle={setOpen} rounded />
      </div>
      <nav
        className={cn(
          "md:block md:static",
          isOpen
            ? "fixed inset-0 flex items-center justify-center bg-white z-40"
            : "hidden"
        )}
      >
        <ul className="flex items-center gap-5 flex-col md:flex-row">
          <li className="text-2xl md:text-base hover:text-dodger-blue transition">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HomeHeader;
