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
      className="flip-card w-[200px] h-[230px] flex justify-center items-center bg-black rounded-[20px]"
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 360 }}
      transition={{ duration: 0.6, animationDirection: "normal" }}
      onAnimationComplete={() => setIsAnimating(false)}
      onClick={handleFlip}
    >
      <div className="flip-card-front w-[100%] h-[100%] bg-cover border text-white rounded-[20px] p-4">
        {text}
      </div>
    </motion.div>
  );
};
