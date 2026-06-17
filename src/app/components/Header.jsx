"use client";
import React from "react";
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

  const handleNavigation = () => {
    router.push("/");
  };
  return (
    <>
      <header className="w-330 bg-[#161326] rounded-[10px] h-19 flex  justify-between  items-center shadow ms-auto me-auto py-4 px-4 absolute left-0 right-0 top-5">
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
        <section>
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
        <section>
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
      </header>
    </>
  );
}
