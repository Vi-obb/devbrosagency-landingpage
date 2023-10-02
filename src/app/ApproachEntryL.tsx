import React from "react";

export default function ApproachEntryL({ name, content }: any) {
  return (
    <div className="flex flex-col justify-center gap-[24px] items-center">
      {/* divider */}
      <hr className="w-full h-[1px] text-black" />
      {/* content */}
      <div className="flex items-start gap-[64px]">
        <div className="w-1/4 shrink-0">
          <h2 className=" text-[27px] text-brand-100 leading-[30.4px] tracking-[-0.27px]">
            {name}
          </h2>
        </div>
        <div className="w-3/4 flex">
          <p className=" text-[17px] leading-[21px] tracking-[0.68px]">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
