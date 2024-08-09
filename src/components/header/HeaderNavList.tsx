"use client";

import { FC, useEffect, useState, Fragment } from "react";
import { Fade as Hamburger } from "hamburger-react";
import HeaderNavItem from "./HeaderNavItem";

interface HeaderNavListProps {
  elements: {
    linkName: string;
    href: string;
  }[];
}

const HeaderNavList: FC<HeaderNavListProps> = ({ elements }) => {
  const [isOpen, setOpen] = useState(false);

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
    <Fragment>
      <div className="md:hidden z-[1002]">
        <Hamburger toggled={isOpen} toggle={setOpen} rounded />
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-white z-[1001] overflow-hidden md:hidden">
          <nav className="h-full flex items-center justify-center">
            <ul className="flex items-center gap-5 flex-col">
              {elements.map((element, index) => (
                <HeaderNavItem key={index} {...element} setOpen={setOpen} />
              ))}
            </ul>
          </nav>
        </div>
      )}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-5">
          {elements.map((element, index) => (
            <HeaderNavItem key={index} {...element} setOpen={setOpen} />
          ))}
        </ul>
      </nav>
    </Fragment>
  );
};
export default HeaderNavList;
