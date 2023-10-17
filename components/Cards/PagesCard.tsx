"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export const PagesCard = ({ text }: { text: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  return (
    <motion.div
      className={`flip-card w-[150px] md:w-[200px] h-[180px] md:h-[230px] flex justify-center items-center bg-[#cccccc] drop-shadow-md rounded-[20px] ${
        isFlipped ? "flipped" : ""
      }`}
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 360 }}
      transition={{ duration: 0.6, animationDirection: "normal" }}
      onAnimationComplete={() => setIsAnimating(false)}
      onClick={handleFlip}
    >
      <div className="flip-card-inner rotate">
        <div className="flip-card-front flex justify-center items-center w-[100%] h-[100%] bg-cover text-white rounded-[20px] p-4">
          <h1>{text}</h1>
        </div>
        <div className="flip-card-back flex justify-center items-center w-[100%] h-[100%] bg-cover text-white rounded-[20px] p-4">
          <h1>Loading...</h1>
        </div>
      </div>
    </motion.div>
  );
};
