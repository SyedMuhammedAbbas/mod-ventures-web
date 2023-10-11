"use client";

// import { Building } from "@/components/Building";
import Image from "next/image";

import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Layer1, Layer2, Layer3, Layer4, Layer5 } from "@/components/Landing";
import { Cloud1, Drone } from "@/assets/images";
import { Navbar } from "@/components/Navbar";

// const url = (name: string, wrap = false) =>
//   `${
//     wrap ? "url(" : ""
//   }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
//     wrap ? ")" : ""
//   }`;

export default function Home() {
  const parallax = useRef<IParallax>(null!);
  return (
    <div
      // className="text-[#6d6d6d]"
      style={{ width: "100%", height: "100%", background: "#253237" }}
    >
      <Parallax ref={parallax} pages={3}>
        <Navbar />
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#ffffff" }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#ffffff" }}
        />

        {/* <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        /> */}

        <ParallaxLayer offset={0.3} speed={0.4} style={{ opacity: 0.6 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={220}
            height={220}
            style={{ display: "block", marginLeft: "5%" }}
            alt={""}
          />
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={165}
            height={165}
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
            width={170}
            height={170}
            style={{ marginLeft: "20%" }}
            alt={""}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={220}
            height={220}
            style={{ display: "block", marginLeft: "55%" }}
            alt={""}
          />
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={110}
            height={110}
            style={{ display: "block", marginLeft: "15%" }}
            alt={""}
          />
        </ParallaxLayer>

        {/* <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={220}
            height={220}
            style={{ display: "block", marginLeft: "70%" }}
            alt={""}
          />
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={220}
            height={220}
            style={{ display: "block", marginLeft: "40%" }}
            alt={""}
          />
        </ParallaxLayer> */}

        {/* <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={110}
            height={110}
            style={{ display: "block", marginLeft: "10%" }}
            alt={""}
          />
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={220}
            height={220}
            style={{ display: "block", marginLeft: "75%" }}
            alt={""}
          />
        </ParallaxLayer> */}

        {/* <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={220}
            height={220}
            style={{ display: "block", marginLeft: "60%" }}
            alt={""}
          />
          <Image
            src={Cloud1}
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
        </ParallaxLayer> */}

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={220}
            height={220}
            style={{ display: "block", marginLeft: "5%" }}
            alt={""}
          />
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={165}
            height={165}
            style={{ display: "block", marginLeft: "75%" }}
            alt={""}
          />
        </ParallaxLayer>

        {/* <ParallaxLayer offset={3.6} speed={0.4} style={{ opacity: 0.6 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={220}
            height={220}
            style={{ display: "block", marginLeft: "5%" }}
            alt={""}
          />
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={165}
            height={165}
            style={{ display: "block", marginLeft: "75%" }}
            alt={""}
          />
        </ParallaxLayer> */}

        {/* <ParallaxLayer offset={4.6} speed={0.4} style={{ opacity: 0.6 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={220}
            height={220}
            style={{ display: "block", marginLeft: "5%" }}
            alt={""}
          />
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={165}
            height={165}
            style={{ display: "block", marginLeft: "75%" }}
            alt={""}
          />
        </ParallaxLayer> */}

        {/* <ParallaxLayer offset={5} speed={0.4} style={{ opacity: 0.6 }}>
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={220}
            height={220}
            style={{ display: "block", marginLeft: "5%" }}
            alt={""}
          />
          <Image
            src={Cloud1}
            layout="intrinsic"
            width={165}
            height={165}
            style={{ display: "block", marginLeft: "75%" }}
            alt={""}
          />
        </ParallaxLayer> */}
        {/* <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <Image
            src={url("earth")}
            layout="intrinsic"
            width={660}
            height={660}
            alt={""}
          />
        </ParallaxLayer> */}

        {/* <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundImage: url("clients", true),
          }}
        /> */}

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(0.6)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Image
            src={url("server")}
            layout="intrinsic"
            width={132}
            height={132}
            alt={""}
          /> */}
          <Layer1 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.6}
          speed={0.2}
          onClick={() => parallax.current.scrollTo(1.2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Image
            src={url("bash")}
            layout="intrinsic"
            width={264}
            height={264}
            alt={""}
          /> */}
          <Layer2 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={0.3}
          onClick={() => parallax.current.scrollTo(1.8)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Image
            src={url("bash")}
            layout="intrinsic"
            width={264}
            height={264}
            alt={""}
          /> */}
          <Layer3 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.8}
          speed={0.4}
          onClick={() => parallax.current.scrollTo(2.4)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Image
            src={url("bash")}
            layout="intrinsic"
            width={264}
            height={264}
            alt={""}
          /> */}
          <Layer4 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          {/* <Image
            src={url("clients-main")}
            layout="intrinsic"
            width={264}
            height={264}
            alt={""}
          /> */}
          <Layer5 />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
