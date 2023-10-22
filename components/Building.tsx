"use client";

import { motion } from "framer-motion";
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

  return (
    <div
      className="absolute top-0 z-[20]"
      style={{ width: "100%", height: "100%" }}
    >
      <Parallax ref={parallax} className="landing-parallax" pages={3}>
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

        <ParallaxLayer offset={2} speed={0.4} style={{ opacity: 0.6 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            // width={220}
            // height={220}
            className={`${CloudsDimensions}`}
            style={{ display: "block", marginLeft: "5%" }}
            alt={""}
          />
          <Image
            src={Cloud2}
            layout="intrinsic"
            // width={165}
            // height={165}
            className={`${SmallCloudDimensions}`}
            style={{ display: "block", marginLeft: "75%" }}
            alt={""}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3.6} speed={0.4} style={{ opacity: 0.6 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={220}
            height={220}
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

        <ParallaxLayer offset={4.6} speed={0.4} style={{ opacity: 0.6 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={220}
            height={220}
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

        <ParallaxLayer offset={5} speed={0.4} style={{ opacity: 0.6 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={220}
            height={220}
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
          onClick={() => parallax?.current?.scrollTo(0.6)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="pb-[5%]">
            <Layer1 />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.6}
          speed={0.2}
          onClick={() => parallax?.current?.scrollTo(1.2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="my-[5%]">
            <Layer2 />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={0.3}
          onClick={() => parallax?.current?.scrollTo(1.8)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="my-[5%]">
            <Layer3 />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.8}
          speed={0.4}
          onClick={() => parallax?.current?.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="mt-[10%]">
            <Layer4 />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => parallax?.current?.scrollTo(0)}
        >
          <div className="my-[5%]">
            <Layer5 />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
