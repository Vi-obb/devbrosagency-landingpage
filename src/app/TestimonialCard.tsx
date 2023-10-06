import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  company: string;
  image: string;
  testimonial: string;
}

const TestimonialCard: React.FC<Props> = ({
  testimonial,
  name,
  image,
  company,
}) => {
  return (
    <div className="flex flex-col tablet:items-start gap-[24px] items-stretch">
      <p className="text-[17px] leading-[21px] tracking-[0.68px] text-center tablet:text-left">
        &quot;{testimonial}&quot;
      </p>
      <div className="flex flex-col  justify-center tablet:flex-row gap-[16px] items-center">
        <Image
          src={image}
          alt={name}
          width={70}
          height={70}
          className="w-16 h-16 object-cover rounded-full"
        />
        <div className="flex flex-col tablet:items-start items-center gap-[8px]">
          <p className="text-center tablet:text-left text-[17px] font-[600] text-brand-100 tracking-[0.68px]">
            {name}
          </p>
          <p className="text-center tablet:text-left text-[17px] leading-[21px] tracking-[0.68px]">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
