"use client";

import { ParallaxLayer } from "@react-spring/parallax";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const TextLayer = ({
  parallax,
  value,
  text,
  size,
  offset,
  speed,
}: any) => {
  const handleOnclick = (parallax: any, value: number) => {
    parallax?.current?.scrollTo(value);
  };
  return (
    <ParallaxLayer
      offset={offset}
      speed={speed}
      onClick={() => handleOnclick(parallax, value)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className={`${roboto.className} mb-[10%] shadow-xl  uppercase font-bold font-outline-2 text-[#ffffff]`}
        style={{
          fontSize: `${size}`,
          textShadow: "5px 0 3px rgba(0,0,0,0.4), 0 0 5px rgba(0,0,0,0.2)",
        }}
      >
        {text}
      </div>
    </ParallaxLayer>
  );
};
