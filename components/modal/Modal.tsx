"use client";

import { PagesCard } from "../Cards";
import { useEffect } from "react";

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
  ];

  return (
    <div className="fixed flex justify-center items-center gap-6 flex-wrap bg-black bg-opacity-20 backdrop-blur-sm w-full h-full z-[70]">
      {routes.map((route, index) => (
        <div key={index}>
          <PagesCard text={route.title} />
        </div>
      ))}
    </div>
  );
};
