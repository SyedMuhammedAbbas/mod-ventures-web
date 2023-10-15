"use client";

import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";

export const useScrollAnimation = (scrollThreshold = 50) => {
  const [hidden, setHidden] = useState(false);
  const [onTop, setOnTop] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > prevScrollY + scrollThreshold && !hidden) {
        controls.start("hidden");
        setHidden(true);
      } else if (scrollY <= prevScrollY - scrollThreshold && hidden) {
        controls.start("visible");
        setHidden(false);
      }
      if (scrollY < 10) {
        setOnTop(true);
      } else {
        setOnTop(false);
      }
      prevScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, hidden, scrollThreshold, onTop]);

  return { controls, onTop };
};
