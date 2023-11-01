"use client";

import Image from "next/image";
import { Logo } from "@/assets/images";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { motion } from "framer-motion";

import { useScrollAnimation } from "@/hooks";
import Link from "next/link";
import { Modal } from "./modal";
import { useModalContext } from "@/context";

export const Navbar = () => {
  const { isOpen, setIsOpen } = useModalContext();

  // const [isOpen, setOpen] = useState(false);

  const { controls, onTop } = useScrollAnimation();

  const variants = {
    /** this is the "visible" key and it's respective style object **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's respective style object **/
    hidden: { opacity: 0, y: -25 },
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <motion.nav
        variants={variants}
        animate={controls}
        /** I'm also going to add a custom easing curve and duration for the animation **/
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        className={`sticky top-0 z-[60] h-[60px] sm:h-[70px] md:h-[80px] flex items-center ${
          onTop
            ? "bg-transparent bg-opacity-0 backdrop-blur-0 shadow-none"
            : "bg-black bg-opacity-5 backdrop-blur-xl shadow-md" // Apply background color when not at the top
        }`}
      >
        <div className="flex items-center justify-between w-full p-10">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="logo"
              className="w-[60px] aspect-auto md:w-[100px]"
              onClick={() => setIsOpen(false)}
            />
          </Link>
          <div
            className="cursor-pointer relative z-[9999]"
            style={{ zIndex: 71 }}
          >
            <Hamburger size={20} toggled={isOpen} toggle={handleToggle} />
          </div>
        </div>
      </motion.nav>
      {isOpen && <Modal isOpen={isOpen} />}
    </>
  );
};
