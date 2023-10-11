"use client";

import Image from "next/image";

import { Layer29, Layer30, Layer30_1, Layer32_3 } from "@/assets/images";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { FloorDimensions } from "../Styles";

export const Layer5 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <motion.section
      ref={ref}
      className="relative cursor-pointer"
      style={
        {
          // scale: scrollYProgress,
          // opacity: scrollYProgress
        }
      }
    >
      <div className={`${FloorDimensions} relative`}>
        <Image
          src={Layer32_3}
          className="w-[30%] right-[20%]"
          style={{
            position: "absolute",
            // width: "30%",
            // bottom: "55px",
            // right: "34px",
            zIndex: 20,
          }}
          alt=""
        />

        <Image
          src={Layer29}
          className="w-[17%] bottom-[5%] left-[15%]"
          style={{
            position: "absolute",
            // width: "17%",
            // bottom: "37px",
            // right: "209px",
            zIndex: 11,
          }}
          alt=""
        />

        <Image
          src={Layer30}
          style={{
            position: "absolute",
            // width: "7%",
            // bottom: "66px",
            // right: "225px",
            zIndex: 10,
          }}
          className="w-[7%] bottom-[15%] left-[20%]"
          alt=""
        />

        <Image
          src={Layer30_1}
          style={{
            position: "absolute",
            zIndex: 10,
          }}
          alt=""
        />
      </div>
    </motion.section>
  );
};
