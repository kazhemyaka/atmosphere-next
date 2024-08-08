"use client";

import type { FC, FormEvent } from "react";
import { usePathname, useRouter } from "next/navigation";

const Search: FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const city = e.currentTarget.city.value;
    const currentPath = pathname.split("/")[3] || "now";
    router.push(`/weather/${city}/${currentPath}`);
  };

  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg rounded-md shadow-sm">
        <div className="pointer-events-none absolute top-2 sm:top-1 left-0 flex items-center pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          type="text"
          name="city"
          id="city"
          className="block w-full rounded-md border border-gray-400 py-1.5 pl-10 pr-3 text-gray-900 placeholder-gray-400 sm:text-sm focus:outline-none focus:ring-1 focus:ring-dodger-blue focus:border-dodger-blue transition ease-in-out duration-150"
          placeholder="Search for a city"
          required
        />
      </div>
    </form>
  );
};

export default Search;
