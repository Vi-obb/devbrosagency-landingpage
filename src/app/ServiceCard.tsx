import React from "react";
import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";

export default function ServiceCard({ name, content }: any) {
  return (
    <div className="bg-brand-100 flex flex-col py-[48px] px-[24px] gap-[32px] rounded-[20px]">
      <Image src="./logostack.svg" alt="logostack" width={234} height={32} />
      <div className="flex flex-col items-start gap-[16px]">
        <h4 className="text-white text-[27px] leading-[30.4px] tracking-[0.27px]">
          {name}
        </h4>
        {content.map((content: string, index: any) => (
          <p
            key={index}
            className="flex gap-[5px] text-[17px] leading-[21px] tracking-[0.68px] text-white"
          >
            <BsFillPlayFill /> {content}
          </p>
        ))}
      </div>
    </div>
  );
}
