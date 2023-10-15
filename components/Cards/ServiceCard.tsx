"use client";

import Image from "next/image";
import { sectionHeadText, sectionSubText } from "@/app/Styles";
import { motion, useAnimation, useInView } from "framer-motion";
// import { fadeIn } from "@/utils/motion";
import { useEffect, useRef } from "react";

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
      // useAnimation
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
        <Image
          src={image}
          alt={"sample service image"}
          className="w-[200px] md:w-[400px] aspect-auto"
        />
        <div className="flex flex-col w-[500px]">
          <h3 className={`${sectionHeadText}`}>{heading}</h3>
          <p className={`${sectionSubText}`}>{description}</p>
        </div>
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--brand)",
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
};
