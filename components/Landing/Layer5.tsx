"use client";

import Image from "next/image";

import {
  Layer29,
  Layer30,
  Layer30_1,
  Layer32_3,
  ground_floor,
} from "@/assets/images";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { FloorDimensions } from "../../app/Styles";
import { ChatManAnimated, SlideWomen } from "@/assets";

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
          src={ChatManAnimated}
          className="w-[40%] right-[17%] bottom-[15%]"
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
          src={SlideWomen}
          className="w-[50%] bottom-[-4%] left-[4%]"
          style={{
            position: "absolute",
            // width: "17%",
            // bottom: "37px",
            // right: "209px",
            zIndex: 11,
          }}
          alt=""
        />

        {/* <Image
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
        /> */}

        <Image
          src={ground_floor}
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
