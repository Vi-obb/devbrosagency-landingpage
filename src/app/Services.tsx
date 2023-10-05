import React, { Suspense } from "react";
import ServiceCard from "./ServiceCard";
import Loading from "./loading";

export default function Services({ services = [] }: any) {
  return (
    <section
      id="services"
      className="flex flex-col justify-center px-[16px] tablet:px-[40px] desktop:px-[80px] py-[80px] desktop:py-[120px] gap-[40px] tablet:gap-[80px]"
    >
      <h2 className="text-center tablet:text-left text-[33px] desktop:text-[41px] desktop:leading-[48px] text-brand-100 tracking-[-0.33px] desktop:tracking-[-0.82px] ">
        Services we offer
      </h2>
      {/* services  */}

      <div className="flex flex-col tablet:flex-row gap-[24px] ">
        {/* service card */}
        {services.map((service: any) => (
          <ServiceCard
            key={service.id}
            name={service.name}
            content={service.content}
          />
        ))}
      </div>
    </section>
  );
}
