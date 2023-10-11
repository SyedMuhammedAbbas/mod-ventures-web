"use client";

import Image from "next/image";

import {
  BB_Logo,
  Bean_Bag_Man,
  Billboard,
  Board,
  //   Cloud1,
  //   Drone,
  Drone_Guy,
  Layer19_1,
  Layer20,
  Layer29,
  Layer30,
  Layer30_1,
  Layer32_3,
  Layer43,
  Layer72,
  Logo,
  Mod_Building,
  Mod_Building_Balcony,
  Mod_Building_Bricks,
  Mod_Building_Floor1_Bottom,
  Mod_Building_Floor1_Glass,
  Mod_Building_Floor1_Photograph,
  Mod_Building_Floor1_Women,
  Mod_Building_Floor2_Bottom,
  Mod_Building_Floor2_Carpet,
  Mod_Building_Floor2_Painting,
  Mod_Building_From_Selection_Women,
  Mod_Building_From_Selection_Women_Items,
  Mod_Building_Ideas_Man,
  Mod_Building_Ideas_Man_Items,
  Mod_Building_Top,
  Monalisa,
  Oculus_Man_1,
  Painting1,
  Painting2,
  Rob_Cat,
  Roof_Plant,
  Table,
} from "@/assets/images";
import { useScroll } from "framer-motion";
import { useRef } from "react";

export const Building = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <div
      ref={ref}
      className="ml-3"
      style={{
        width: "322px",
        margin: "0 auto",
        height: "950px",
        marginTop: "20px",
        backgroundColor: "white",
        position: "relative",
        // clipPath: "polygon(0% 9.75%, 50% 0%, 99.4% 9.6%, 100% 100%, 0% 100%)",
      }}
    >
      {/* <Image
        className="cloud hidden md:block"
        src={Cloud1}
        style={{
          position: "fixed",
          width: "124px",
          top: "74px",
          left: "22%",
          zIndex: 8888,
        }}
        alt=""
      />
      <Image
        className="cloud hidden md:block"
        src={Cloud1}
        style={{
          position: "fixed",
          width: "124px",
          top: "32px",
          right: "22%",
          zIndex: 8888,
        }}
        alt=""
      />
      <Image src={Drone} id="drone" alt="" className="hidden md:block z-[2]" /> */}
      {/* <!-- <Image
          src="./Asstes/Layer 69oc.svg"
          style="
            position: fixed;
            width: 60px;
            top: 15%;
            right: 24%;
          "
          className="bird2"
          alt=""
        />
        <Image
          src="./Asstes/Layer 69.svg"
          style="
            position: fixed;
            width: 60px;
            top: 25%;
            right: 24%;
          "
          className="bird2"
          alt=""
        /> --> */}
      {/* <!-- <Image
          src="./Asstes/Layer 68 (1).svg"
          style="
            position: fixed;
            width: 60px;
            top: 75%;
            left: 24%;
            z-index: 999999;
          "
          className="bir d"
          alt=""
        />
        <Image
          src="./Asstes/Layer 68 (1).svg"
          style="
            position: fixed;
            width: 60px;
            top: 65%;
            left: 24%;
            z-index: 999999;
          "
          className="bi rd"
          alt=""
        /> --> */}
      <div
        className="fourthFloor group cursor-pointer z-[99999]"
        style={{
          width: "100%",
          position: "absolute",
          top: "150px",
          height: "150px",
        }}
      >
        {/* <div className="card-animation hidden group-hover:block absolute bg-black h-[300px] w-[200px] right-0 0 z-[9999] border-2 border-black bg-white rounded-2xl left-[-100px] top-[30px]">
          <div className="flex gap-4 border-b-2 border-b-black w-full items-center p-2">
            <Image src={Logo} alt="logo" className="w-[40px] h-[30px]" />
            <Image src={Logo} alt="logo" className="w-[40px] h-[30px]" />
            <h1 className="text-[14px] font-bold">Services</h1>
          </div>
          <div className="h-[100px] rounded-2xl bg-black my-4 mx-3"></div>
          <div className="border-t-2 border-t-black w-full px-3 p-2">
            <span className="font-bold text-[14px]">mod.ventures</span>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
              qui.
            </p>
            <div className="flex w-full justify-end">
              <button className="bg-black text-white p-0.5 px-2 rounded-2xl text-[10px]">
                read more
              </button>
            </div>
          </div>
        </div> */}

        <Image
          src={Layer43}
          style={{
            position: "absolute",
            width: "320px",
            right: "2px",
            zIndex: 3,
          }}
          className="group-hover:opacity-80"
          alt=""
        />
        <Image
          src={Drone_Guy}
          style={{
            width: "25px",
            position: "absolute",
            left: "64px",
            top: "36px",
            zIndex: 99,
          }}
          alt=""
        />
        <Image
          src={Table}
          style={{
            width: "125px",
            position: "absolute",
            right: "78px",
            top: "29px",
          }}
          alt=""
        />
        <Image
          src={Board}
          style={{
            width: "255px",
            position: "absolute",
            right: "25px",
            top: "13px",
            zIndex: 999,
          }}
          alt=""
        />
        <Image
          src={Monalisa}
          style={{
            width: "208px",
            position: "absolute",
            right: "-44px",
            top: "18px",
          }}
          alt=""
        />
        <Image
          src={Layer72}
          style={{
            width: "157px",
            position: "absolute",
            right: "-4px",
            top: "76px",
          }}
          alt=""
        />
      </div>
      <div className="relative group h-full w-full cursor-pointer">
        {/* <!-- card --> */}
        {/* <div className="card-animation hidden group-hover:block absolute bg-black h-[300px] w-[200px] right-0 z-[99999] border-2 border-black bg-white rounded-2xl right-[-100px] top-[30px]">
          <div className="flex gap-4 border-b-2 border-b-black w-full items-center p-2">
            <Image src={Logo} alt="logo" className="w-[40px] h-[30px]" />
            <Image src={Logo} alt="logo" className="w-[40px] h-[30px]" />
            <h1 className="text-[14px] font-bold">About Us</h1>
          </div>
          <div className="h-[100px] rounded-2xl bg-black my-4 mx-3"></div>
          <div className="border-t-2 border-t-black w-full px-3 p-2">
            <span className="font-bold text-[14px]">mod.ventures</span>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
              qui.
            </p>
            <a href="about.html" className="flex w-full justify-end">
              <button className="bg-black text-white p-0.5 px-2 rounded-2xl text-[10px]">
                read more
              </button>
            </a>
          </div>
        </div> */}
        {/* <div className="card-animation hidden group-hover:block absolute bg-black h-[220px] w-[200px] right-0 z-[99999] border-2 border-black bg-white rounded-2xl left-[-100px] top-[160px]">
          <div className="flex gap-4 border-b-2 border-b-black w-full items-center p-2">
            <Image src={Logo} alt="logo" className="w-[40px] h-[30px]" />
            <Image src={Logo} alt="logo" className="w-[40px] h-[30px]" />
            <h1 className="text-[14px] font-bold">Services</h1>
          </div>
          <div className="h-[50px] rounded-2xl bg-black my-4 mx-3"></div>
          <div className="border-t-2 border-t-black w-full px-3 p-2">
            <span className="font-bold text-[14px]">mod.ventures</span>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
              qui.
            </p>
          </div>
        </div> */}
        {/* <div className="card-animation hidden group-hover:block absolute bg-black h-[220px] w-[200px] right-0 z-[99999] border-2 border-black bg-white rounded-2xl right-[-100px] top-[360px]">
          <div className="flex gap-4 border-b-2 border-b-black w-full items-center p-2">
            <Image src={Logo} alt="logo" className="w-[40px] h-[30px]" />
            <Image src={Logo} alt="logo" className="w-[40px] h-[30px]" />
            <h1 className="text-[14px] font-bold">Services</h1>
          </div>
          <div className="h-[50px] rounded-2xl bg-black my-4 mx-3"></div>
          <div className="border-t-2 border-t-black w-full px-3 p-2">
            <span className="font-bold text-[14px]">mod.ventures</span>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
              qui.
            </p>
          </div>
        </div> */}
        <Image
          src={Billboard}
          style={{
            position: "absolute",
            width: "150px",
            top: "-45px",
            left: "127px",
            zIndex: 999,
          }}
          alt=""
        />

        <Image
          src={BB_Logo}
          style={{
            position: "absolute",
            width: "40px",
            top: "-18px",
            left: "143px",
            zIndex: 10000,
          }}
          alt={""}
        />
        <Image src={Layer20} className="oculus-animate" alt={""} />
        <Image
          src={Layer19_1}
          style={{
            position: "absolute",
            width: "22px",
            top: "27px",
            left: "112px",
            zIndex: 10000,
          }}
          alt={""}
        />

        <Image
          src={Bean_Bag_Man}
          style={{
            position: "absolute",
            width: "40px",
            top: "85px",
            left: "52px",
          }}
          alt={""}
        />

        <Image
          src={Roof_Plant}
          style={{
            position: "absolute",
            width: "36px",
            top: "56px",
            left: "236px",
            zIndex: 99,
          }}
          alt={""}
        />
        <Image src={Rob_Cat} className="cat-animate" alt={""} />

        <Image
          src={Oculus_Man_1}
          alt="Rotating Image"
          className="rotate-image"
        />
      </div>
      <Image
        src={Mod_Building_Top}
        style={{
          width: "100%",
          position: "absolute",
          top: "0",
        }}
        alt=""
      />

      <Image
        src={Mod_Building_Bricks}
        style={{
          width: "100%",
          position: "absolute",
          top: "80px",
          left: "5px",
          zIndex: 2,
        }}
        alt={""}
      />

      <Image
        src={Mod_Building}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: 9999,
        }}
        className="top-0"
        alt=""
      />

      <div
        className="secondFloor"
        style={{
          width: "100%",
          position: "absolute",
          top: "0",
          height: "500px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
          }}
          className="group cursor-pointer"
        >
          <Image
            src={Painting1}
            style={{
              position: "absolute",
              width: "80px",
              bottom: "138px",
              left: "16px",
            }}
            alt=""
          />

          <Image
            src={Painting2}
            style={{
              position: "absolute",
              width: "80px",
              bottom: "138px",
              right: "16px",
            }}
            alt=""
          />

          <Image
            src={Mod_Building_Floor1_Women}
            style={{
              position: "absolute",
              bottom: "100px",
              width: "34px",
              left: "119px",
            }}
            alt=""
          />

          <Image
            src={Mod_Building_Floor1_Glass}
            style={{
              width: "60%",
              position: "absolute",
              right: "4px",
              bottom: "12px",
              zIndex: 9999,
            }}
            alt=""
          />

          <Image
            src={Mod_Building_Floor1_Bottom}
            style={{
              width: "100%",
              position: "absolute",
              bottom: "0",
            }}
            alt=""
          />

          <Image
            src={Mod_Building_Balcony}
            style={{
              position: "absolute",
              width: "50%",
              bottom: "-25px",
              left: "-35px",
            }}
            alt=""
          />

          <Image
            src={Mod_Building_Floor1_Photograph}
            style={{
              position: "absolute",
              width: "37%",
              bottom: "55px",
              right: "34px",
            }}
            alt=""
          />
        </div>
      </div>
      <div
        className="thirdFloor"
        style={{
          width: "100%",
          position: "absolute",
          top: "250px",
          height: "500px",
          marginTop: "10px",
        }}
      >
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
          <Image
            src={Mod_Building_Floor2_Painting}
            style={{
              position: "absolute",
              width: "110px",
              bottom: "138px",
              right: "16px",
            }}
            alt=""
          />

          <Image
            src={Mod_Building_Floor2_Carpet}
            style={{
              position: "absolute",
              bottom: "59px",
              width: "90px",
              left: "52px",
            }}
            alt=""
          />

          <Image
            src={Mod_Building_Ideas_Man}
            style={{
              position: "absolute",
              bottom: "50px",
              width: "34px",
              left: "61px",
              zIndex: 9999,
            }}
            alt=""
          />

          <Image
            src={Mod_Building_Ideas_Man_Items}
            className="Ideas-Man-Items"
            alt=""
          />

          <Image
            src={Mod_Building_Floor2_Bottom}
            style={{ width: "100%", position: "absolute", bottom: "0" }}
            alt=""
          />

          <Image
            src={Mod_Building_From_Selection_Women}
            style={{
              position: "absolute",
              height: "100px",
              width: "50px",
              bottom: "54px",
              right: "96px",
            }}
            alt=""
          />

          <Image
            src={Mod_Building_From_Selection_Women_Items}
            className="From-selection-Women-Items"
            alt=""
          />
        </div>
      </div>

      <div>
        <Image
          src={Layer32_3}
          style={{
            position: "absolute",
            width: "30%",
            bottom: "55px",
            right: "34px",
            zIndex: 11,
          }}
          alt=""
        />

        <Image
          src={Layer29}
          style={{
            position: "absolute",
            width: "17%",
            bottom: "37px",
            right: "209px",
            zIndex: 11,
          }}
          alt=""
        />

        <Image
          src={Layer30}
          style={{
            position: "absolute",
            width: "7%",
            bottom: "66px",
            right: "225px",
            zIndex: 10,
          }}
          className="scale-on-scroll"
          alt=""
        />

        <Image
          src={Layer30_1}
          style={{
            position: "absolute",
            width: "100%",
            bottom: "94px",
            right: "0px",
            zIndex: 10,
          }}
          alt=""
        />
      </div>
      {/* <div
          style="
            position: relative;
            position: relative;
            bottom: 33px;
            z-index: -7;
            right: 120px;
          "
        >
          <Image src="./Asstes/Layer 33.svg" alt="" width="506px" />
        </div>  */}
    </div>
  );
};
