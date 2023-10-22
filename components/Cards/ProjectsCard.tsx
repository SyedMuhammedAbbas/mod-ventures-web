"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export const ProjectsCard = ({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.div
        transition={{ duration: 0.3 }}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="flip-card bg-[#ffffff] border-[2px] border-[#000000] drop-shadow-xl cursor-pointer my-4 rounded-[20px] shadow-lg w-[200px] md:w-[300px] h-[300px] md:h-[400px]"
      >
        <div className="flex flex-col  justify-between">
          <div className="flex justify-end border-b-2 p-3 border-[#000000]">
            <motion.h2 layout="position">projects</motion.h2>
          </div>
          <motion.div
            layout="position"
            className="h-[170px] md:h-[260px] flex p-2 justify-center items-center"
          >
            <motion.div
              layout="position"
              //   variants={imageVariants}
              className="flex"
            >
              <div className="rounded-[20px] w-[170px] h-[130px] md:w-[250px] md:h-[170px] bg-[#000000]"></div>
            </motion.div>
          </motion.div>
          <motion.div
            layout="position"
            className="relative flex justify-between items-end"
          >
            <motion.div
              layout="position"
              className="flex flex-col items-start justify-center py-1 z-10 px-3 w-[60%] border-t-[2px] border-r-2 rounded-tr-lg border-[#000000]"
            >
              <motion.h4
                layout="position"
                className="text-[11px] md:text-[14px]"
              >
                mod.ventures
              </motion.h4>
              <motion.h3
                layout="position"
                className="text-[#000000] font-semibold text-[13px] md:text-[16px]"
              >
                {name}
              </motion.h3>
            </motion.div>
            <motion.div
              layout="position"
              className="absolute bottom-0 right-[2px] w-[40%] h-[30px] z-20 border-t-[2px] p-2 border-l-2 border-l-[#ffffff] border-[#000000] flex justify-center items-start"
            >
              <motion.button
                layout="position"
                onClick={() => setIsOpen(!isOpen)}
                // variants={buttonVariants}
                className="bg-black text-[#ffffff] w-[70px] h-[20px] text-[12px] rounded-[30px] flex justify-center items-center"
              >
                flip card
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
