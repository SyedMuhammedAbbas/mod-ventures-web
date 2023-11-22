"use client";

import Image from "next/image";

import {
  BB_Logo,
  Bean_Bag_Man,
  Billboard,
  Cloud1,
  Layer19_1,
  Layer20,
  // Layer43,
  Mod_Building_Floor2_Bottom,
  Oculus_Man_1,
  Rob_Cat,
  Roof_Plant,
  roof_floor,
} from "@/assets/images";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Width, FloorDimensions } from "../../app/Styles";
import {
  BillBoard_Animated,
  OculusManAnimated,
  RobotCatAnimated,
} from "@/assets";

export const Layer1 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  // const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // const cloudY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <motion.section
      ref={ref}
      className={`${Width}`}
      style={
        {
          // width: "100%",
          // position: "absolute",
          // top: "0",
          // height: "350px",
          // marginTop: "20px",
          // scale: scrollYProgress,
          // opacity: scrollYProgress,
          // y: backgroundY,
        }
      }
    >
      {/* <motion.div
        style={{
          position: "absolute",
          zIndex: 20,
          top: "0%",
          left: "0%",
          // y: cloudY,
        }}
      >
        <Image
          className="w-[124px]"
          src={Cloud1}
          style={
            {
              // width: "124px",
            }
          }
          alt=""
        />
      </motion.div>

      <motion.div
        style={{
          position: "absolute",
          zIndex: 20,
          top: "0%",
          right: "0%",
          // y: cloudY,
        }}
      >
        <Image
          className="w-[124px]"
          src={Cloud1}
          style={
            {
              // width: "124px",
            }
          }
          alt=""
        />
      </motion.div> */}

      <div className={`${FloorDimensions} relative`}>
        <Image
          src={roof_floor}
          style={{
            position: "absolute",
            // width: "500px",
            // right: "2px",
            zIndex: 3,
          }}
          className={`group-hover:opacity-80 ${Width}`}
          alt=""
        />
        <Image
          src={RobotCatAnimated}
          className="w-[20%] top-[45%] left-[35%]"
          style={{
            position: "absolute",
            // width: "36px",
            // top: "56px",
            // left: "236px",
            zIndex: 999,
          }}
          alt={""}
        />

        <Image
          src={BillBoard_Animated}
          className="w-[70%] top-[-4%]"
          style={{
            position: "absolute",
            // width: "150px",
            // top: "-5%",
            // left: "45%",
            zIndex: 999,
          }}
          alt=""
        />
        {/*
        <Image
          src={BB_Logo}
          className="w-[40px] sm:w-[60px] md:w-[70px] lg:w-[85px] top-[13%] left-[42.4%]"
          style={{
            position: "absolute",
            // width: "40px",
            // top: "-18px",
            // left: "47%",
            zIndex: 999,
          }}
          alt={""}
        />
        <Image src={Layer20} className="oculus-animate" alt={""} />
        <Image
          src={Layer19_1}
          className="w-[22px] sm:w-[28px] md:w-[35px] lg:w-[40px] top-[25%] left-[35%]"
          style={{
            position: "absolute",
            // width: "22px",
            // top: "27px",
            // left: "112px",
            zIndex: 10000,
          }}
          alt={""}
        />

        <Image
          src={Bean_Bag_Man}
          className="w-[40px] sm:w-[80px] md:w-[90px] lg:w-[110px] top-[42%] left-[15%]"
          style={{
            position: "absolute",
            // width: "40px",
            // top: "85px",
            // left: "52px",
            zIndex: 999,
          }}
          alt={""}
        />

        <Image
          src={Roof_Plant}
          className="w-[36px] sm:w-[50px] md:w-[70px] lg:w-[90px] top-[30%] right-[7%] "
          style={{
            position: "absolute",
            // width: "36px",
            // top: "56px",
            // left: "236px",
            zIndex: 999,
          }}
          alt={""}
        />
        <Image
          src={Rob_Cat}
          className="w-[41px] sm:w-[55px] md:w-[75px] lg:w-[95px] bottom-[30%] left-[40%]"
          style={{
            position: "absolute",
            // width: "36px",
            // top: "56px",
            // left: "236px",
            zIndex: 999,
          }}
          alt={""}
        /> */}

        <Image
          src={OculusManAnimated}
          className="w-[30%] right-[20%] top-[35%]"
          alt="Rotating Image"
          style={{
            position: "absolute",
            // width: "36px",
            // top: "56px",
            // left: "236px",
            zIndex: 999,
          }}
          // className="rotate-image"
        />
      </div>
    </motion.section>
  );
};
