"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion"; // Import motion and useAnimation
import { PagesCard } from "../Cards";

export const Modal = ({ isOpen }: { isOpen: boolean }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function: Reset overflow to 'unset' when the component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const routes = [
    { title: "About Us", url: "/about" },
    { title: "Teams", url: "/teams" },
    { title: "Services", url: "/services" },
    { title: "Contact", url: "/contact" },
    { title: "Projects", url: "/projects" },
  ];

  return (
    <div className="fixed flex justify-center items-center p-[10%] pb-[20%] overflow-auto gap-6 flex-wrap bg-black bg-opacity-20 backdrop-blur-lg w-full h-full z-[70]">
      {routes.map((route, index) => (
        <motion.div
          key={index}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }} // Adjust the delay time as needed
        >
          <PagesCard text={route.title} path={route.url} />
        </motion.div>
      ))}
    </div>
  );
};
