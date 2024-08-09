import { FC } from "react";
import Link from "next/link";

interface HeaderNavItemProps {
  linkName: string;
  href: string;
  setOpen: (open: boolean) => void;
}

const HeaderNavItem: FC<HeaderNavItemProps> = ({ linkName, href, setOpen }) => {
  return (
    <li className="text-2xl md:text-base hover:text-dodger-blue transition">
      <Link href={href} onClick={() => setOpen(false)}>
        {linkName}
      </Link>
    </li>
  );
};
export default HeaderNavItem;
