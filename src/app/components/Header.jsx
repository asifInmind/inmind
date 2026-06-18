"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Header() {
  const navItems = [
    { id: 1, text: "home", path: "/" },
    { id: 2, text: "features", path: "/features" },
    { id: 3, text: "how it works", path: "/how-it-works" },
    { id: 4, text: "case studies", path: "/case-studies" },
    { id: 5, text: "pricing", path: "/pricing" },
  ];
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = () => {
    router.push("/");
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="w-[95%] lg:w-330 bg-[#161326] rounded-[10px] h-19 flex justify-between items-center shadow ms-auto me-auto py-4 px-4 fixed left-0 right-0 top-5 z-1000">
        <section>
          <Image
            src={"/icons/logo.svg"}
            alt="web logo"
            width={50}
            height={50}
            className="w-27.25 h-6.5"
            onClick={handleNavigation}
            loading="eager"
          />
        </section>
        <section className="hidden lg:block">
          <nav>
            <ul className="flex justify-center gap-9">
              {navItems.map((navLinks) => (
                <li key={navLinks.id}>
                  <Link
                    href={navLinks.path}
                    className="text-[#ffffff] capitalize font-medium text-[16px] hover:text-[#328476]"
                  >
                    {navLinks.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
        <section className="hidden lg:block">
          <Button
            width={"160px"}
            height={"44px"}
            bg={"#328476"}
            color="white"
            content={"Get a Free Demo"}
          />
          {/* <button class="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50">
            <span class="relative z-10">Hover Me</span>
            <span class="absolute inset-0 overflow-hidden rounded-md">
              <span class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
            </span>
          </button> */}
        </section>

        {/* mobile menu icon, only visible below lg */}
        <section className="block lg:hidden ">
          <svg
            onClick={() => setIsMenuOpen(true)}
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M3 6H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 12H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 18H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </section>
      </header>

      {/* dark overlay behind the mobile menu */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* mobile slide-in menu */}
      <div
        className={`fixed top-0  left-0 h-full w-3/4 max-w-72 bg-[#161326] z-1001 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <Image
            src={"/icons/logo.svg"}
            alt="web logo"
            width={50}
            height={50}
            className="w-27.25 h-6.5"
            onClick={handleNavigation}
            loading="eager"
          />

          {/* close icon */}
          <svg
            onClick={() => setIsMenuOpen(false)}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M18 6L6 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <nav className="px-4 mt-6">
          <ul className="flex flex-col gap-6">
            {navItems.map((navLinks) => (
              <li key={navLinks.id}>
                <Link
                  href={navLinks.path}
                  onClick={handleLinkClick}
                  className="text-[#ffffff] capitalize font-medium text-[16px] hover:text-[#328476]"
                >
                  {navLinks.text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button
              width={"100%"}
              height={"44px"}
              bg={"#328476"}
              color="white"
              content={"Get a Free Demo"}
            />
          </div>
        </nav>
      </div>
    </>
  );
}
