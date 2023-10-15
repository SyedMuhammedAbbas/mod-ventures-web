"use client";

import { ServiceCard } from "@/components/Cards";
import { services } from "@/constants";
// import { SectionWrapper } from "@/hoc";

export default function Services() {
  return (
    <>
      <div className="mt-20 flex flex-col gap-5 justify-center w-full">
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
    </>
  );
}

// export default SectionWrapper(Services);
