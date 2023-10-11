"use client";

import Image from "next/image";

import {
  Mod_Building_Balcony,
  Mod_Building_Floor1_Bottom,
  Mod_Building_Floor1_Glass,
  Mod_Building_Floor1_Photograph,
  Mod_Building_Floor1_Women,
  Painting1,
  Painting2,
} from "@/assets/images";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { FloorDimensions } from "../Styles";

export const Layer3 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <motion.section
      ref={ref}
      // className="secondFloor"
      style={
        {
          // width: "100%",
          // position: "absolute",
          // top: "0",
          // height: "250px",
          // marginTop: "20px",
          // scale: scrollYProgress,
          // opacity: scrollYProgress,
        }
      }
    >
      <div
        style={{
          position: "relative",
          // height: "100%",
          // width: "100%",
        }}
        className={`group cursor-pointer ${FloorDimensions}`}
      >
        <Image
          src={Painting1}
          className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] top-[0%] left-[16px]"
          style={{
            position: "absolute",
            // width: "80px",
            // bottom: "138px",
            // left: "16px",
          }}
          alt=""
        />

        <Image
          src={Painting2}
          className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] top-[0%] right-[16px]"
          style={{
            position: "absolute",
            // width: "80px",
            // bottom: "138px",
            // right: "16px",
          }}
          alt=""
        />

        <Image
          src={Mod_Building_Floor1_Women}
          className="w-[34px] sm:w-[43px] md:w-[53px] lg:w-[63px] bottom-[50%] left-[35%]"
          style={{
            position: "absolute",
            // bottom: "100px",
            // width: "34px",
            // left: "119px",
            zIndex: 99999,
          }}
          alt=""
        />

        <Image
          src={Mod_Building_Floor1_Glass}
          style={{
            width: "60%",
            position: "absolute",
            right: "4px",
            bottom: "20%",
            zIndex: 9999,
          }}
          alt=""
        />

        <Image
          src={Mod_Building_Floor1_Bottom}
          style={{
            width: "100%",
            position: "absolute",
            // bottom: "0",
          }}
          alt=""
        />

        <Image
          src={Mod_Building_Balcony}
          className="w-[50%] bottom-[12%] left-[-10%]"
          style={{
            position: "absolute",
            // width: "50%",
            // bottom: "-25px",
            // left: "-35px",
            zIndex: 9999,
          }}
          alt=""
        />

        <Image
          src={Mod_Building_Floor1_Photograph}
          className="bottom-[35%] right-[17%]"
          style={{
            position: "absolute",
            width: "35%",
            // bottom: "55px",
            // right: "34px",
          }}
          alt=""
        />
      </div>
    </motion.section>
  );
};
