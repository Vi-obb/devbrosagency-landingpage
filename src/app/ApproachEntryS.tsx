"use client";

import React, { useState } from "react";

export default function ApproachEntryS({ name, content }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="w-full flex flex-col gap-[24px] items-stretch"
      onClick={toggleAccordion}
    >
      {/* divider */}
      <hr className="w-full h-[1px] text-black" />
      {/* content */}
      <div className="flex flex-col  gap-[24px] items-stretch">
        <div className="flex justify-between items-center gap-[24px] ">
          <h2 className="text-[27px] text-brand-100 leading-[30.4px] tracking-[-0.27px]">
            {name}
          </h2>
          <svg
            className={`w-[32px] h-[32px] transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {isOpen && (
          <p className="items-stretch text-[17px] leading-[21px] tracking-[0.68px]">
            {content}
          </p>
        )}
      </div>
    </div>
  );
}
