import {
  Billboard,
  Cloud1,
  Cloud2,
  Layer10,
  Layer11,
  Layer19_1,
  Layer20,
  Oculus_Man_1,
  Rob_Cat,
} from "@/assets/images";
import { Clouds } from "@/utils/Clouds";
import Image from "next/image";

const About = () => {
  const aboutText =
    "Elevate Your Digital Dreams with Mod.Ventures: Where Innovation Takes Flight!";

  return (
    <>
      <section className="min-w-screen relative min-h-screen flex justify-center items-center">
        <div className="absolute bottom-0 right-0 ">
          <div className="relative w-[250px] sm:w-[300px] md:w-[400px] lg:w-[600px] h-[350px] sm:h-[500px] md:h-[600px] lg:h-[800px]">
            <Image
              src={Layer11}
              alt={""}
              className="absolute bottom-[10%] z-10 aspect-auto right-[5%] md:right-[10%] w-[140px] sm:w-[200px] md:w-[250px] lg:w-[400px]"
            />

            <Image
              src={Oculus_Man_1}
              alt={""}
              className="absolute bottom-[20%] z-20 aspect-auto right-[17%] w-[70px] sm:w-[90px] md:w-[120px] lg:w-[150px]"
            />
          </div>
        </div>
        <Image
          src={Rob_Cat}
          alt={""}
          className="absolute bottom-[10%] md:bottom-[20%]  aspect-auto left-[45%] w-[70px] sm:w-[90px] md:w-[120px] lg:w-[150px]"
        />
        {/* <Image
          src={Billboard}
          alt={""}
          className="absolute top-[40%] object-contain left-[20%] h-[400px] "
        /> */}
        <Clouds />
        <div className="absolute bottom-0 left-0 ">
          <div className="relative w-[250px] sm:w-[300px] md:w-[400px] lg:w-[600px] h-[350px] sm:h-[500px] md:h-[600px] lg:h-[800px]">
            <Image
              src={Layer19_1}
              alt={""}
              className="absolute bottom-[10%] z-20 aspect-auto left-[30%] w-[35px] sm:w-[50px] md:w-[70px] lg:w-[80px]"
            />
            <Image
              src={Layer20}
              alt={""}
              className="absolute bottom-[33%] aspect-auto left-[45%] w-[50px] md:w-[60px] lg:w-[90px]"
            />
            <Image
              src={Layer10}
              alt={""}
              className="absolute bottom-0 left-0 z-10 w-[100%]"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-center text-[20px] md:text-[25px] lg:text-[30px] font-bold font-sans">
            Elevate Your Digital Dreams with Mod.Ventures
            <br /> Where Innovation Takes Flight!
          </h1>
        </div>
      </section>
    </>
  );
};

export default About;
