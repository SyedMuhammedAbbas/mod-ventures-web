"use client";

import { motion, useTransform, useViewportScroll } from "framer-motion";
// import { useRef } from "react";
import { Layer1, Layer2, Layer3, Layer4, Layer5 } from "./Landing";
import { Width } from "../app/Styles";
import { useNavbarContext } from "@/context";

// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

import React, { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
// import { Layer1, Layer2, Layer3, Layer4, Layer5 } from "@/components/Landing";
import { Cloud1, Cloud2, Drone } from "@/assets/images";
import { Navbar } from "@/components/Navbar";
import { CloudsDimensions } from "@/app/Styles";
import { SmallCloudDimensions } from "@/app/Styles/styles";

import { Roboto } from "next/font/google";
import { TextLayer } from "@/utils/TextLayer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const Building = () => {
  const { scrollPosition, setScrollPosition } = useNavbarContext();
  const parallax = useRef<IParallax | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallax.current) {
        // Calculate the scroll position from the parallax container, and update the context
        const scrollY = parallax.current.current;
        // console.log(scrollY, "building scroll position");
        setScrollPosition(scrollY);
      }
    };

    const container = document.querySelector(".landing-parallax");

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [parallax, scrollPosition]);

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [1, 1.1, 1.2, 1.3, 1.4, 1.5]
  );

  return (
    <div
      className="absolute top-0 z-[20]"
      style={{ width: "100%", height: "100%" }}
    >
      <Parallax ref={parallax} className="landing-parallax" pages={3.3}>
        {/* <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#ffffff" }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#ffffff" }}
        /> */}

        <ParallaxLayer offset={0.3} speed={0.4} style={{ opacity: 0.6 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            className={`${CloudsDimensions}`}
            style={{ display: "block", marginLeft: "5%" }}
            alt={""}
          />
          <Image
            src={Cloud1}
            layout="intrinsic"
            className={`${CloudsDimensions}`}
            style={{ display: "block", marginLeft: "75%" }}
            alt={""}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.7}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <Image
            src={Drone}
            layout="intrinsic"
            className="w-[50px] ml-[5%] lg:ml-[7%] xl:ml-[15%] 2xl:ml-[17%] sm:w-[70px] lg:w-[90px] 2xl:w-[120px] aspect-auto z-[99999]"
            // style={{ marginLeft: "20%" }}
            alt={""}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            className={`${CloudsDimensions}`}
            style={{ display: "block", marginLeft: "55%" }}
            alt={""}
          />
          <Image
            src={Cloud1}
            layout="intrinsic"
            className={`${SmallCloudDimensions}`}
            style={{ display: "block", marginLeft: "15%" }}
            alt={""}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={220}
            height={220}
            style={{ display: "block", marginLeft: "70%" }}
            alt={""}
          />
          <Image
            src={Cloud2}
            layout="intrinsic"
            width={220}
            height={220}
            style={{ display: "block", marginLeft: "40%" }}
            alt={""}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={110}
            height={110}
            style={{ display: "block", marginLeft: "10%" }}
            alt={""}
          />
          <Image
            src={Cloud2}
            layout="intrinsic"
            width={220}
            height={220}
            style={{ display: "block", marginLeft: "75%" }}
            alt={""}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={220}
            height={220}
            style={{ display: "block", marginLeft: "60%" }}
            alt={""}
          />
          <Image
            src={Cloud2}
            layout="intrinsic"
            width={275}
            height={275}
            style={{ display: "block", marginLeft: "30%" }}
            alt={""}
          />
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={110}
            height={110}
            style={{ display: "block", marginLeft: "80%" }}
            alt={""}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.4} speed={0.1} style={{ opacity: 0.1 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={175}
            height={175}
            style={{ display: "block", marginLeft: "5%" }}
            alt={""}
          />
          <Image
            src={Cloud2}
            layout="intrinsic"
            width={165}
            height={165}
            style={{ display: "block", marginLeft: "50%" }}
            alt={""}
          />
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={180}
            height={180}
            style={{ display: "block", marginLeft: "60%" }}
            alt={""}
          />
          <Image
            src={Cloud2}
            layout="intrinsic"
            width={170}
            height={170}
            style={{ display: "block", marginLeft: "30%" }}
            alt={""}
          />
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={110}
            height={110}
            style={{ display: "block", marginLeft: "40%" }}
            alt={""}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.2} speed={-0.2} style={{ opacity: 0.4 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={150}
            height={150}
            style={{ display: "block", marginLeft: "5%" }}
            alt={""}
          />
          <Image
            src={Cloud2}
            layout="intrinsic"
            width={165}
            height={165}
            style={{ display: "block", marginLeft: "65%" }}
            alt={""}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.3} speed={0.4} style={{ opacity: 0.5 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={100}
            height={100}
            style={{ display: "block", marginLeft: "5%" }}
            alt={""}
          />
          <Image
            src={Cloud2}
            layout="intrinsic"
            width={165}
            height={165}
            style={{ display: "block", marginLeft: "75%" }}
            alt={""}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax?.current?.scrollTo(0.5)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => parallax?.current?.scrollTo(0.6)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className={`${roboto.className} mb-[25%] text-[20vw] drop-shadow-lg  uppercase font-bold font-outline-2 text-[#ffffff]`}
            >
              About
            </div>
          </ParallaxLayer> */}
          <TextLayer
            parallax={parallax}
            value={0.6}
            text={"About"}
            size={"15vw"}
            offset={0}
            speed={0.7}
          />
          <motion.div>
            <Layer1 />
          </motion.div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.6}
          speed={0.2}
          onClick={() => parallax?.current?.scrollTo(1.1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextLayer
            parallax={parallax}
            value={1.2}
            text={"Services"}
            size={"10vw"}
            offset={0}
            speed={0.6}
          />

          <motion.div>
            <Layer2 />
          </motion.div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.1}
          speed={0.3}
          onClick={() => parallax?.current?.scrollTo(1.8)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextLayer
            parallax={parallax}
            value={2.2}
            text={"Teams"}
            size={"10vw"}
            offset={0.2}
            speed={0.5}
          />

          <motion.div>
            <Layer3 />
          </motion.div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.9}
          speed={0.4}
          onClick={() => parallax?.current?.scrollTo(2.4)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextLayer
            parallax={parallax}
            value={2.4}
            text={"Projects"}
            size={"10vw"}
            offset={0.3}
            speed={0.3}
          />

          <motion.div>
            <Layer4 />
          </motion.div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.4}
          speed={0.6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => parallax?.current?.scrollTo(0)}
        >
          <TextLayer
            parallax={parallax}
            value={0}
            text={"Contact"}
            size={"10vw"}
            offset={0.4}
            speed={0.3}
          />

          <motion.div>
            <Layer5 />
          </motion.div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
