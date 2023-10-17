"use client";

// NavbarContext.js

import { createContext, useContext, useState, useEffect } from "react";

const NavbarContext = createContext<{
  scrollPosition: number;
  setScrollPosition: (scrollPosition: number) => void;
} | null>(null);

export function useNavbarContext() {
  const context = useContext(NavbarContext);
  if (context === null) {
    throw new Error(
      "useNavbarContext must be used within a NavbarContextProvider"
    );
  }
  return context;
}

export function NavbarContextProvider({ children }: { children: any }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavbarContext.Provider value={{ scrollPosition, setScrollPosition }}>
      {children}
    </NavbarContext.Provider>
  );
}
