"use client";

import { useState } from "react";
import "./flip-transition.css";
import { FlipCardLayout } from "./FlipCardLayout";
import { Card } from "./Card";

export const ProjectsCard = ({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: any;
}) => {
  const [showFront, setShowFront] = useState(true);

  const frontContent = (
    <div
      className="flex flex-col bg-[#ffffff] rounded-[20px] justify-between w-full h-full absolute"
      style={{ backfaceVisibility: "hidden" }}
    >
      <div className="relative w-full h-full">
        <div className="flex justify-end h-[20%] border-b-2 p-3 border-[#000000]">
          <h2 className="font-bold text-[14px]">projects</h2>
        </div>
        <div className="h-[55%] flex p-2 justify-center items-center">
          <div className="rounded-[20px] w-[90%] h-[90%] bg-[#000000]"></div>
        </div>
        <div className="relative flex justify-between items-end w-[100%] h-[25%]">
          <div className="flex flex-col items-start justify-center py-1 z-10 px-3 w-[60%] border-t-[2px] h-[100%] border-r-2 rounded-tr-lg border-[#000000]">
            <h4 className="text-[13px]">mod.ventures</h4>
            <h3 className="text-[#000000] font-bold text-[13px] ">{name}</h3>
          </div>
          <div className="absolute bottom-0 right-[2px] w-[40%] h-[70%] z-20 border-t-[2px] p-2 border-l-2 border-l-[#ffffff] border-[#000000] flex justify-center items-start">
            <button
              onClick={() => {
                setShowFront(false);
              }}
              className="bg-black text-[#ffffff] w-[70px] h-[20px] text-[12px] rounded-[30px] flex justify-center items-center"
            >
              flip card
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const backContent = (
    <div
      className="w-full h-full flex flex-col gap-5 z-30 bg-[#ffffff] rounded-[20px] justify-center items-center absolute"
      style={{
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <p
          className="text-[16px] font-mono font-bold text-center"
          style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.9)" }}
        >
          {description}
        </p>
        <button
          onClick={() => {
            setShowFront(true);
          }}
          className="absolute bottom-3 z-20 bg-black text-[#ffffff] w-[70px] h-[20px] text-[12px] rounded-[30px] flex justify-center items-center"
        >
          flip card
        </button>
      </div>
    </div>
  );

  return (
    <>
      <FlipCardLayout showFront={showFront}>
        <Card>
          {frontContent}
          {backContent}
        </Card>
      </FlipCardLayout>
    </>
  );
};
