import React from "react";
import Link from "next/link";
import Button from "./Button"
import Image from "next/image"
export default function Header() {
  const navItems = [
    { id: 1, text: "home", path: "/" },
    { id: 2, text: "features", path: "/features" },
    { id: 3, text: "how it works", path: "/how-it-works" },
    { id: 4, text: "case studies", path: "/case-studies" },
    { id: 5, text: "pricing", path: "/pricing" },
  ];
  return (
    <>
      <header className="w-330 bg-[#161326] rounded-[10px] h-19 flex  justify-between  items-center shadow ms-auto me-auto py-4 px-4 absolute left-0 right-0 top-5">
        <section>
         <Image src={'/icons/logo.svg'} alt="web logo"  width={50} height={50} className="w-27.25 h-6.5"/>
        </section>
        <section>
          <nav>
            <ul className="flex justify-center gap-9">
              {navItems.map((navLinks) => (
                <li key={navLinks.id}>
                  <Link href={navLinks.path} className="text-[#ffffff] capitalize font-medium text-[16px]">{navLinks.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
        <section>
         <Button width={'144px'} height={'44px'} bg={'#328476'} color='white' content={'Get Free Demo'}/>
                
        </section>
      </header>
    </>
  );
}
