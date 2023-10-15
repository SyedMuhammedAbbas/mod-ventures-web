"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

import {
  Board,
  Drone,
  Drone_Guy,
  Layer43,
  Layer72,
  Monalisa,
  Table,
} from "@/assets/images";
import { FloorDimensions, Width } from "../../app/Styles";

export const Layer2 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <motion.section
      ref={ref}
      // className="secondFloor"
      style={{
        // width: "100vw",
        position: "relative",
        // top: "0",
        // height: "350px",
        // marginTop: "20px",
        // scale: scrollYProgress,
        // opacity: scrollYProgress,
      }}
    >
      {/* <motion.div
        style={{
          position: "absolute",
          zIndex: 20,
          top: "10%",
          left: "-20%",
          // y: cloudY,
        }}
      >
        <Image className="w-[100px]" src={Drone} alt="" />
      </motion.div> */}

      <motion.div
        style={{
          position: "absolute",
          zIndex: 20,
          top: "10%",
          right: "0%",
          // y: cloudY,
        }}
      ></motion.div>
      <div className={`${FloorDimensions} relative`}>
        <Image
          src={Layer43}
          className={`group-hover:opacity-80`}
          style={{
            position: "absolute",
            // width: "500px",
            // right: "2px",
            zIndex: 3,
          }}
          // className="group-hover:opacity-80"
          alt=""
        />
        <Image
          src={Drone_Guy}
          className="w-[25px] sm:w-[35px] md:w-[45px] lg:w-[55px] top-[35%] left-[20%]"
          style={{
            // width: "25px",
            position: "absolute",
            // left: "64px",
            // top: "36px",
            zIndex: 99,
          }}
          alt=""
        />
        <Image
          src={Table}
          className="w-[125px] sm:w-[150px] md:w-[200px] lg:w-[250px] top-[35%] right-[25%]"
          style={{
            // width: "125px",
            position: "absolute",
            // right: "78px",
            // top: "29px",
          }}
          alt=""
        />
        <Image
          src={Board}
          className="w-[255px] sm:w-[435px] md:w-[535px] lg:w-[685px] top-[10%] right-[25px]"
          style={{
            // width: "255px",
            position: "absolute",
            // right: "25px",
            // top: "13px",
            zIndex: 999,
          }}
          alt=""
        />
        <Image
          src={Monalisa}
          className="w-[208px] sm:w-[300px] md:w-[350px] lg:w-[400px] top-[11%] right-[-12%]"
          style={{
            // width: "208px",
            position: "absolute",
            // right: "-44px",
            // top: "18px",
          }}
          alt=""
        />
        {/* <Image
        src={Layer72}
        style={{
          width: "157px",
          position: "absolute",
          right: "-4px",
          top: "76px",
        }}
        alt=""
      /> */}
      </div>
    </motion.section>
  );
};
