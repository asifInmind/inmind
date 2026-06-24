"use client";
import React, { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  // ← added
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = () => {
    router.push("/");
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 w-[90%] xl:w-[90%] xl:max-w-7xl top-5 rounded-[10px] h-19 flex justify-between items-center  py-4 px-4 z-50 transition-colors duration-300
          ${scrolled ? "bg-[#161326]/75 backdrop-blur-md" : "bg-transparent"}`}
      >
        {" "}
        <section>
          {!isMenuOpen && (
            <Image
              src={"/icons/logo.svg"}
              alt="web logo"
              width={50}
              height={50}
              className="w-27.25 h-6.5"
              onClick={handleNavigation}
              loading="eager"
            />
          )}
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
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-[384px] bg-[#161326] z-1001 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 pt-10">
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
