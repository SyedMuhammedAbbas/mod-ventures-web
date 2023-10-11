"use client";

import Image from "next/image";
import { Logo } from "@/assets/images";
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const routes = [
    { heading: "Home", route: "" },
    { heading: "About us", route: "" },
    { heading: "Services", route: "" },
    { heading: "Projects", route: "" },
    { heading: "Teams", route: "" },
    { heading: "Contact", route: "" },
  ];

  const [scrollDirection, setScrollDirection] = useState<string>("");
  const [lastScrollDirection, setLastScrollDirection] = useState<string>("");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setLastScrollDirection(scrollDirection);
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return (
    <header
      className={`${
        scrollDirection === "down" && lastScrollDirection === "up"
          ? "top-[-90px]"
          : " sticky transition-all ease-out duration-200 top-0 z-[99999] h-[60px] sm:h-[70px] md:h-[90px] items-center"
      }`}
    >
      <div className="flex items-center justify-between w-full p-10">
        <Image
          src={Logo}
          alt="logo"
          className="w-[90px] aspect-auto md:w-[120px]"
        />
        <div className="cursor-pointer relative">
          <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
          {/* <div className="absolute top-[19px] right-0 text-white w-[80px] bg-black text-[14px] flex-col gap-1 py-2 hidden group-hover:flex card-animation">
          <h1 className="hover:bg-white hover:text-black text-[12px] px-3 py-1">
            Home
          </h1>
          <a
            href="about.html"
            className="hover:bg-white hover:text-black text-[12px] px-3 py-1"
          >
            About us
          </a>
          <a
            href="services.html"
            className="hover:bg-white hover:text-black text-[12px] px-3 py-1"
          >
            Services
          </a>
          <a
            href="projects.html"
            className="hover:bg-white hover:text-black text-[12px] px-3 py-1"
          >
            Projects
          </a>
          <a
            href="teams.html"
            className="hover:bg-white hover:text-black text-[16px] px-3 py-1"
          >
            Teams
          </a>
          <a
            href="contact.html"
            className="hover:bg-white hover:text-black text-[16px] px-3 py-1"
          >
            Contact
          </a>
        </div> */}
        </div>
      </div>
    </header>
  );
};
