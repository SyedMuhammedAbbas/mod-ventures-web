"use client";

import Image from "next/image";

import {
  Mod_Building_Floor2_Bottom,
  Mod_Building_Floor2_Carpet,
  Mod_Building_Floor2_Painting,
  Mod_Building_From_Selection_Women,
  Mod_Building_From_Selection_Women_Items,
  Mod_Building_Ideas_Man,
  Mod_Building_Ideas_Man_Items,
  first_floor,
} from "@/assets/images";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { FloorDimensions } from "../../app/Styles";
import { RotatingGirl, StandingManAnimated } from "@/assets";

export const Layer4 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <motion.section
      ref={ref}
      // className="thirdFloor"
      style={
        {
          // width: "100%",
          // position: "absolute",
          // top: "250px",
          // height: "250px",
          // marginTop: "10px",
          // scale: scrollYProgress,
          // opacity: scrollYProgress,
        }
      }
    >
      <div
        className={`${FloorDimensions} relative`}
        // style={{ position: "relative" }}
      >
        {/* <Image
          src={Mod_Building_Floor2_Painting}
          className="w-[110px] sm:w-[130px] md:w-[150px] lg:w-[170px] bottom-[72%] right-[5%]"
          style={{
            position: "absolute",
            // width: "110px",
            // bottom: "138px",
            // right: "16px",
          }}
          alt=""
        /> */}

        {/* <Image
          src={Mod_Building_Floor2_Carpet}
          className="w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px] bottom-[42%] left-[15%]"
          style={{
            position: "absolute",
            // bottom: "59px",
            // width: "90px",
            // left: "52px",
          }}
          alt=""
        /> */}

        <Image
          src={StandingManAnimated}
          className="w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] bottom-[12%] left-[10%]"
          style={{
            position: "absolute",
            // bottom: "50px",
            // width: "34px",
            // left: "61px",
            zIndex: 9999,
          }}
          alt=""
        />

        {/* <Image
          src={Mod_Building_Ideas_Man_Items}
          className="absolute w-[103px] sm:w-[140px] md:w-[160px] lg:w-[200px] bottom-[67%] left-[4%]"
          style={{ zIndex: 99999 }}
          alt=""
        /> */}

        <Image
          src={first_floor}
          style={{ width: "100%", position: "absolute" }}
          alt=""
        />

        <Image
          src={RotatingGirl}
          className="w-[30%] right-[5%] bottom-[29%]"
          style={{
            position: "absolute",
            // height: "100px",
            // width: "50px",
            // bottom: "54px",
            // right: "96px",
          }}
          alt=""
        />

        {/* <Image
          src={Mod_Building_From_Selection_Women_Items}
          className="w-[35px] sm:w-[45px] md:w-[55px] lg:w-[65px] bottom-[75%] right-[15%]"
          style={{
            position: "absolute",
            // width: "35px",
            // bottom: 126px,
            // right: 67px;
            zIndex: 99999,
          }}
          alt=""
        /> */}
      </div>
    </motion.section>
  );
};
