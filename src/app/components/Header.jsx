import React from "react";
import Link from "next/link";
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
      <header>
        <section>
          <h1>logo</h1>
        </section>
        <section>
          <nav>
            <ul>
              {navItems.map((navLinks) => (
                <li key={navLinks.id}>
                  <Link href={navLinks.path}>{navLinks.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
        <section>
          <button>get free demo</button>
        </section>
      </header>
    </>
  );
}
