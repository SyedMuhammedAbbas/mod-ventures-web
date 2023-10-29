import {
  Desk,
  Desk_SVG,
  Floor,
  Vector_Smart_Object_Contact,
} from "@/assets/images";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div>
        <div className="absolute z-20 bottom-5 md:bottom-[10%]  right-[10%] ">
          <div className="relative w-[200px] sm:w-[250px] md:w-[400px] lg:w-[600px]">
            <Image src={Floor} alt={""} className="w-[100%] z-10" />
            <Image
              src={Desk}
              alt={""}
              className="absolute w-[30%] bottom-14 z-10"
            />
            <Image
              src={Vector_Smart_Object_Contact}
              alt={""}
              className="absolute w-[30%] bottom-14 z-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
