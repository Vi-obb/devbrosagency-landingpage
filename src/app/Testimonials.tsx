import React from "react";
import Image from "next/image";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../utils/testimonials";
export default function Testimonials() {
  return (
    <section
      id="testimonial"
      className="bg-brand-50 flex flex-col  justify-center px-[16px] tablet:px-[40px] desktop:px-[80px] py-[80px] desktop:py-[120px] "
    >
      <div className="flex flex-col items-start gap-[40px] tablet:gap-[80px]">
        <h2 className="text-center tablet:text-left text-[33px] desktop:text-[41px] text-brand-100 leading-[48px] tablet:tracking-[-0.33px] desktop:tracking-[-0.82px] ">
          What our clients say <br className="hidden tablet:block" /> about us
        </h2>
        {/* testimonial subsection */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-[40px] tablet:gap-x-[24px] tablet:gap-y-[60px] items-start">
          {/* testimonal card */}
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              company={testimonial.company}
              testimonial={testimonial.testimonial}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
