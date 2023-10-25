import { Cloud1, Cloud2 } from "@/assets/images";
import Image from "next/image";

export const Clouds = () => {
  return (
    <>
      <Image
        src={Cloud1}
        alt={"cloud"}
        className="absolute top-[10%] aspect-auto left-[15%] w-[70px] sm:w-[100px] md:w-[150px] lg:w-[200px]"
      />
      <Image
        src={Cloud2}
        alt={"cloud"}
        className="absolute top-[10%] aspect-auto right-[15%] w-[70px] sm:w-[100px] md:w-[150px] lg:w-[200px]"
      />
    </>
  );
};
