"use client";

import { useEffect, useState, useRef } from "react";
import { useAnimation } from "framer-motion";
import { useNavbarContext } from "@/context";
import { usePathname } from "next/navigation";

export const useScrollAnimation = (scrollThreshold = 50) => {
  const [hidden, setHidden] = useState(false);
  const [onTop, setOnTop] = useState(true);
  const controls = useAnimation();

  const { scrollPosition } = useNavbarContext();
  const pathname = usePathname();

  let isLanding = pathname === "/";

  // Initialize prevScrollY using useRef
  const prevScrollYRef = useRef(isLanding ? scrollPosition : 0); // Initialize with 0

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const scrollY = isLanding ? scrollPosition : window.scrollY;

        if (scrollY > prevScrollYRef.current && !hidden) {
          controls.start("hidden");
          setHidden(true);
        } else if (scrollY <= prevScrollYRef.current && hidden) {
          controls.start("visible");
          setHidden(false);
        }
        if (scrollY < 2) {
          setOnTop(true);
        } else {
          setOnTop(false);
        }

        // Update the value of prevScrollY using the ref
        prevScrollYRef.current = scrollY;
      }
    };

    if (isLanding) {
      handleScroll(); // Call it immediately when isLanding is true
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [controls, hidden, scrollThreshold, onTop, scrollPosition, isLanding]);

  return { controls, onTop };
};
