"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useModalContext } from "@/context";

export const PagesCard = ({ text, path }: { text: string; path: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const { isOpen, setIsOpen } = useModalContext();

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
      setTimeout(() => {
        // After 2 seconds, navigate to another page
        router.push(path); // Replace with your desired route
        setTimeout(() => {
          setIsOpen(false);
        }, 500);
      }, 500);
    }
  };

  useEffect(() => {
    if (isFlipped) {
      // Automatically start the route transition after 2 seconds
      const routeTimeout = setTimeout(() => {
        router.push(path); // Replace with your desired route
        // setIsOpen(false);
      }, 2000);
      return () => clearTimeout(routeTimeout);
    }
  }, [isFlipped, path, router, isOpen]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <AnimatePresence>
        {isFlipped && (
          <motion.div
            key="loading"
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#eeeeee] z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Loading...</h1>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className={`flip-card w-[150px] md:w-[200px] h-[180px] md:h-[230px] flex justify-center items-center bg-[#eeeeee] drop-shadow-md rounded-[20px] ${
          isFlipped ? "flipped" : ""
        }`}
        initial={false}
        animate={{ scale: isFlipped ? 1.5 : 1 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
        onClick={handleFlip}
      >
        <div className="flip-card-inner rotate">
          <div className="flip-card-front flex justify-center items-center w-[100%] h-[100%] bg-cover text-[20px] font-bold rounded-[20px] p-4">
            <h1
              className="text-white text-[20px] sm:text-[25px] lg:text-[30px]"
              style={{
                content: "''",
                color: "transparent",
                background: "black",
                WebkitBackgroundClip: "text",
                textShadow: "2px 5px 5px rgba(255, 255, 255, 0.9)",
              }}
            >
              {text}
            </h1>
          </div>
          <div className="flip-card-back flex justify-center items-center w-[100%] h-[100%] bg-cover text-black text-[20px] font-bold rounded-[20px] p-4">
            <h1>Loading...</h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
