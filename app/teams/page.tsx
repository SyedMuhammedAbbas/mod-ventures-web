"use client";

import { TeamCard } from "@/components/Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Blinds1,
  Clock,
  Layer29,
  Mod_Building_Ideas_Man,
  Profile,
  Screens,
  Screens2,
  Vector_Smart_Object_Contact,
  Vector_Smart_Object_Contact_1_SVG,
  Vector_Smart_Object_Project_SVG,
  Vector_Smart_Object_Teams,
  Vector_Smart_Object_Teams_SVG,
  Woman,
} from "@/assets/images";
import Image from "next/image";

const Teams = () => {
  var settings = {
    dots: true,
    dotsClass: "slick-dots",
    // infinite: true,
    speed: 400,
    // autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    appendDots: (dots: any) => <ul>{dots}</ul>,
    customPaging: (i: any) => <div className="ft-slick__dots--custom"></div>,
    responsive: [
      // {
      //   breakpoint: 2400,
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      // {
      //   breakpoint: 1800,
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const teams = [
    {
      name: "John Smith",
      designation: "Software Engineer",
      description:
        "Experienced software engineer with a strong background in web development.",
      image: Profile,
    },
    {
      name: "Emily Davis",
      designation: "UI/UX Designer",
      description:
        "Passionate UI/UX designer with a focus on creating user-friendly and visually appealing interfaces.",
      image: Profile,
    },
    {
      name: "Michael Lee",
      designation: "Product Manager",
      description:
        "Seasoned product manager skilled in driving product development and delivering successful products.",
      image: Profile,
    },
    {
      name: "Sarah Johnson",
      designation: "Marketing Specialist",
      description:
        "Marketing specialist with expertise in digital marketing and brand promotion.",
      image: Profile,
    },
    {
      name: "David Wilson",
      designation: "QA Tester",
      description:
        "Dedicated QA tester with a keen eye for detail and a commitment to ensuring software quality.",
      image: Profile,
    },
  ];

  return (
    <>
      <div className="relative flex gap-4 min-h-[100vh] justify-center items-center">
        <Image
          src={Clock}
          alt={""}
          className="absolute top-[10%] z-10 aspect-auto right-[10%] w-[50px] sm:w-[60px] lg:w-[80px]"
        />

        <div className="absolute bottom-5 md:bottom-[10%]  right-[10%] ">
          <div className="relative w-[200px] sm:w-[250px] md:w-[400px] lg:w-[600px]">
            <Image
              src={Woman}
              alt={""}
              className="absolute z-20 bottom-14 right-0  aspect-auto w-[50px] sm:w-[60px] md:w-[70px] lg:w-[100px]"
            />
            <Image
              src={Vector_Smart_Object_Teams}
              alt={""}
              className="w-[100%] z-10"
            />
            {/* <Image
              src={Screens2}
              alt={""}
              className="absolute top-0 z-10 aspect-auto w-1/2"
            /> */}
          </div>
        </div>

        <div className="absolute bottom-5 md:bottom-[10%] left-[10%] ">
          <div className="relative w-[100px]">
            <Image
              src={Mod_Building_Ideas_Man}
              alt={""}
              className="absolute bottom-0 right-0 z-10 aspect-auto w-[50px] sm:w-[60px] md:w-[70px] lg:w-[100px]"
            />
            {/* <Image
              src={Screens2}
              alt={""}
              className="absolute top-0 z-10 aspect-auto w-1/2"
            /> */}
          </div>
        </div>

        <div className="absolute top-[20%] sm:top-[30%] left-0  sm:left-[10%] ">
          <div className="relative w-[100px]">
            <Image
              src={Blinds1}
              alt={""}
              className="absolute bottom-0 right-0 z-10 aspect-auto w-[50px] sm:w-[60px] md:w-[70px] lg:w-[100px]"
            />
            {/* <Image
              src={Screens2}
              alt={""}
              className="absolute top-0 z-10 aspect-auto w-1/2"
            /> */}
          </div>
        </div>
        <div className="absolute top-[40%] right-3 sm:right-[10%] ">
          <div className="relative w-[100px]">
            <Image
              src={Blinds1}
              alt={""}
              className="absolute bottom-0 right-0 z-10 aspect-auto w-[50px] sm:w-[60px] md:w-[70px] lg:w-[100px]"
            />
            {/* <Image
              src={Screens2}
              alt={""}
              className="absolute top-0 z-10 aspect-auto w-1/2"
            /> */}
          </div>
        </div>

        {/* <div className="flex items-center justify-center">
          <Image
            src={Vector_Smart_Object_Project_SVG}
            alt="background splash"
            className="w-[70%]"
          />
        </div> */}
        <div className="w-[70vw] sm:w-[50vw] featuredcards mx-auto my-auto  h-[400px]">
          <Slider {...settings}>
            {teams.map((member, index) => (
              <div key={index}>
                <TeamCard
                  name={member.name}
                  description={member.description}
                  designation={member.designation}
                  image={member.image}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Teams;
