"use client";

import { TeamCard } from "@/components/Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Profile } from "@/assets/images";

const Teams = () => {
  var settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    appendDots: (dots: any) => <ul>{dots}</ul>,
    customPaging: (i: any) => <div className="ft-slick__dots--custom"></div>,
    responsive: [
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
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
      <div className="flex gap-4 min-h-[100vh] justify-center items-center">
        <div className="w-[100vw] sm:w-[90vw] featuredcards mx-auto my-auto h-[650px]">
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
