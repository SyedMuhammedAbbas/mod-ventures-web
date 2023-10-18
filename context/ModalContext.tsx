"use client";

// NavbarContext.js

import { createContext, useContext, useState, useEffect } from "react";

const ModalContext = createContext<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
} | null>(null);

export function useModalContext() {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error(
      "useModalContext must be used within a ModalContextProvider"
    );
  }
  return context;
}

export function ModalContextProvider({ children }: { children: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
