"use client";

import Image from "next/image";
import { sectionHeadText, sectionSubText } from "@/app/Styles";
import { motion, useAnimation, useInView } from "framer-motion";
// import { fadeIn } from "@/utils/motion";
import { useEffect, useRef, useState } from "react";

export const ServiceCard = ({
  image,
  heading,
  description,
  index,
}: {
  image: any;
  heading: string;
  description: string;
  index: number;
}) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className={`flex gap-4 items-center justify-center 
      ${isEven ? "flex-row-reverse" : "flex-row"}
      `}
      >
        <motion.div className="flip-card bg-[#ffffff] border-[2px] w-[270px]  border-[#000000] drop-shadow-xl cursor-pointer my-4 rounded-[20px] shadow-lg">
          <div className="flex flex-col  justify-between">
            <div className="flex justify-end border-b-2 p-3 border-[#000000]">
              <motion.h2 layout="position">Services</motion.h2>
            </div>
            <motion.div
              layout="position"
              className="h-[200px] flex gap-3 p-3 justify-center items-center"
            >
              <motion.div
                layout="position"
                // variants={imageVariants}
                className="flex justify-center items-center"
              >
                <Image
                  src={image}
                  alt="profile"
                  className="aspect-auto object-contain w-[200px]"
                />
              </motion.div>
            </motion.div>
            <motion.div
              layout="position"
              className="relative flex justify-between items-end"
            >
              <motion.div
                layout="position"
                className="flex flex-col items-start justify-center py-1 z-10 px-3 w-[100%] border-t-[2px] border-[#000000]"
              >
                <motion.h4 layout="position">mod.ventures</motion.h4>

                <motion.h4
                  layout="position"
                  className="text-[#000000] font-semibold text-[18px]"
                >
                  {heading}
                </motion.h4>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="flex flex-col w-[400px]">
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`${sectionHeadText}`}
          >
            {heading}
          </motion.h3>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`${sectionSubText}`}
          >
            {description}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};
