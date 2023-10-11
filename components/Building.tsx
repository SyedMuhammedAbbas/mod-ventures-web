"use client";

import { motion } from "framer-motion";
// import { useRef } from "react";
import { Layer1, Layer2, Layer3, Layer4, Layer5 } from "./Landing";
import { Width } from "./Styles";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export const Building = () => {
  // const ref = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0 1", "1.33 1"],
  // });

  return (
    <motion.section
      //   ref={ref}
      className={`ml-3 ${Width}`}
      style={{
        // width: "500px",
        margin: "0 auto",
        height: "100vh",
        // marginTop: "20px",
        backgroundColor: "white",
        position: "relative",
        // opacity: scrollYProgress,
        // clipPath: "polygon(0% 9.75%, 50% 0%, 99.4% 9.6%, 100% 100%, 0% 100%)",
      }}
    >
      <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={2.5}>
          <div className="animation_layer parallax">
            <Layer1 />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={3.5}>
          <div className="animation_layer parallax">
            <Layer2 />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={4.5}>
          <div className="animation_layer parallax">
            <Layer3 />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={5.5}>
          <div className="animation_layer parallax">
            <Layer4 />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={6.5}>
          <div className="animation_layer parallax">
            <Layer5 />
          </div>
        </ParallaxLayer>
      </Parallax>
      {/* <div className="py-[10%] flex justify-center items-center">
        <Layer1 />
      </div>
      <div className="py-[10%] flex justify-center items-center">
        <Layer2 />
      </div>
      <div className="py-[10%] flex justify-center items-center">
        <Layer3 />
      </div>
      <div className="py-[10%] flex justify-center items-center">
        <Layer4 />
      </div>
      <div className="py-[10%] flex justify-center items-center">
        <Layer5 />
      </div> */}
    </motion.section>
  );
};
