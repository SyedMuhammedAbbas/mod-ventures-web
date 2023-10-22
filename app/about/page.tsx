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
import Image from "next/image";

const About = () => {
  const aboutText =
    "Elevate Your Digital Dreams with Mod.Ventures: Where Innovation Takes Flight!";

  return (
    <>
      <section className="min-w-screen relative min-h-screen flex justify-center items-center">
        <Image
          src={Layer11}
          alt={""}
          className="absolute bottom-[10%] z-10 aspect-auto right-[10%] w-[400px]"
        />
        <Image
          src={Rob_Cat}
          alt={""}
          className="absolute bottom-[18%] aspect-auto left-[45%] w-[150px]"
        />
        <Image
          src={Oculus_Man_1}
          alt={""}
          className="absolute bottom-[17%] z-20 aspect-auto right-[17%] w-[150px]"
        />
        <Image
          src={Billboard}
          alt={""}
          className="absolute top-[40%] object-contain left-[20%] h-[400px] "
        />
        <Image
          src={Cloud1}
          alt={""}
          className="absolute top-[10%] aspect-auto left-[15%] w-[200px]"
        />
        <Image
          src={Cloud2}
          alt={""}
          className="absolute top-[10%] aspect-auto right-[15%] w-[200px]"
        />
        <Image
          src={Layer19_1}
          alt={""}
          className="absolute bottom-[10%] aspect-auto left-[10%] w-[80px]"
        />
        <Image
          src={Layer20}
          alt={""}
          className="absolute bottom-[33%] aspect-auto left-[16%] w-[90px]"
        />
        <Image
          src={Layer10}
          alt={""}
          className="absolute bottom-0 left-0 w-[600px]"
        />
        <div className="flex justify-center items-center">
          <h1 className="text-center text-[30px] font-bold leading-[60px] font-sans">
            Elevate Your Digital Dreams with Mod.Ventures
            <br /> Where Innovation Takes Flight!
          </h1>
        </div>
      </section>
    </>
  );
};

export default About;
