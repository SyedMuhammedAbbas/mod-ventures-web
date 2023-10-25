import {
  Frames,
  Layer15,
  Painting1,
  Painting2,
  Vector_Smart_Object_2,
  Vector_Smart_Object_3,
  Vector_Smart_Object_Project_SVG,
  Women_Sitting,
} from "@/assets/images";
import Image from "next/image";
import { Profile } from "@/assets/images";
import { ProjectsCard } from "@/components/Cards";

const Projects = () => {
  const projects = [
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
      <div className="relative min-w-screen min-h-[100vh] flex flex-col gap-5 items-center justify-center">
        <div className="fixed bottom-[40%] md:bottom-20 right-5 md:right-10">
          <div className="relative w-[150px] md:w-[200px] lg:w-[300px] h-[200px] md:h-[250px] lg:h-[350px]">
            <Image
              src={Painting2}
              alt={""}
              className="absolute top-0 z-10 aspect-auto right-[10%] w-[50px] md:w-[100px] lg:w-[140px]"
            />
            <Image
              src={Layer15}
              alt={""}
              className="absolute bottom-0 z-10 aspect-auto w-[100%]"
            />
          </div>
        </div>

        <div className="fixed bottom-10 left-14">
          <div className="relative w-[150px] md:w-[200px] lg:w-[300px] h-[200px] md:h-[250px] lg:h-[350px]">
            <Image
              src={Painting1}
              alt={""}
              className="absolute top-0 z-20 aspect-auto left-[10%] w-[50px] md:w-[100px] lg:w-[140px]"
            />
            <Image
              src={Women_Sitting}
              alt={""}
              className="absolute bottom-[19%] z-20 aspect-auto left-[6%] w-[37.2px] md:w-[50px] lg:w-[75px]"
            />
            <Image
              src={Vector_Smart_Object_Project_SVG}
              alt={""}
              className="absolute bottom-[10%] z-10 aspect-auto right-[10%] w-[100%]"
            />
          </div>
        </div>

        {projects.map((member, index) => (
          <div key={index}>
            <ProjectsCard
              name={member.name}
              description={member.description}
              image={member.image}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
