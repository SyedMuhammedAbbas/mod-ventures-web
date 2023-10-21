"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export const TeamCard = ({
  name,
  description,
  designation,
  image,
}: {
  name: string;
  description: string;
  designation: string;
  image: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    closed: { width: "300px", height: "400px" },
    open: { width: "350px", height: "410px" },
  };

  const imageVariants = {
    closed: { width: "250px", x: "45%" },
    open: { width: "100px", left: "0%", x: "-3%" },
  };

  const textVariants = {
    closed: { opacity: 0, transition: { delay: -0.3 } },
    open: { opacity: 1, transition: { delay: 0.2 } },
  };

  const buttonVariants = {
    closed: { y: 0 },
    open: { y: 0 },
  };

  return (
    <div>
      <motion.div
        transition={{ duration: 0.3 }}
        variants={containerVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="flip-card bg-[#ffffff] border-[2px] border-[#000000] drop-shadow-xl cursor-pointer my-4 rounded-[20px] shadow-lg"
      >
        <div className="flex flex-col  justify-between">
          <div className="flex justify-end border-b-2 p-3 border-[#000000]">
            <motion.h2 layout="position">teams</motion.h2>
          </div>
          <motion.div
            layout="position"
            className="h-[250px] flex gap-3 p-3 justify-center items-center"
          >
            <motion.div
              layout="position"
              variants={imageVariants}
              className="flex"
            >
              <Image
                src={image}
                alt="profile"
                className="aspect-auto object-contain rounded-full"
              />
            </motion.div>
            <motion.div
              layout="position"
              variants={textVariants}
              className="w-[200px] text-[15px] font-sans font-semibold"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
          <motion.div
            layout="position"
            className="relative flex justify-between items-end"
          >
            <motion.div
              layout="position"
              className="flex flex-col items-start justify-center py-1 z-10 px-3 w-[70%] border-t-[2px] border-r-2 rounded-tr-lg border-[#000000]"
            >
              <motion.h4 layout="position">mod.ventures</motion.h4>
              <motion.h3
                layout="position"
                className="text-[#000000] font-semibold text-[18px]"
              >
                {name}
              </motion.h3>
              <motion.h4
                layout="position"
                className="text-[#000000] text-[15px]"
              >
                {designation}
              </motion.h4>
            </motion.div>
            <motion.div
              layout="position"
              className="absolute bottom-0 right-[2px] w-[30%] h-[60px] z-20 border-t-[2px] p-2 border-l-2 border-l-[#ffffff] border-[#000000] flex items-end"
            >
              <motion.button
                layout="position"
                onClick={() => setIsOpen(!isOpen)}
                // variants={buttonVariants}
                className="bg-black text-[#ffffff] w-[100px] h-[30px] text-[15px] rounded-[30px] flex justify-center items-center"
              >
                {!isOpen ? "See more" : "See less"}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
