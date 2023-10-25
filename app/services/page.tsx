"use client";

import { ServiceCard } from "@/components/Cards";
import { services } from "@/constants";
import { Clouds } from "@/utils/clouds";
// import { SectionWrapper } from "@/hoc";

export default function Services() {
  return (
    <>
      <div className="relative flex justify-center min-w-[100vw] min-h-[100vh] ">
        <div className="fixed w-full">
          <div className="relative min-w-[100vw] min-h-[100vh]">
            <Clouds />
          </div>
        </div>
        <div className="mt-[10%] flex flex-col gap-5 justify-center w-full">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              heading={service.title}
              description={service.description}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </>
  );
}

// export default SectionWrapper(Services);
