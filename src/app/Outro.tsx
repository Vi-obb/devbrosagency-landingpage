import React from "react";
import Link from 'next/link'

export default function Outro() {
  return (
    <section
      id="outro"
      className="flex flex-col  justify-center px-[16px] tablet:px-[40px] desktop:px-[80px] py-[80px] desktop:py-[120px] "
    >
      <div className="rounded-[20px] flex bg-brand-50 flex-col justify-center  shrink-0 items-stretch py-[40px] px-[20px] gap-[40px] tablet:gap-[80px] tablet:py-[80px] tablet:px-[40px]">
        <h1 className="text-[33px] tablet:text-[41px] desktop:text-[52px] text-brand-100 desktop:leading-[54px] tablet:leading-[48px] tracking-[-0.33px] tablet:tracking-[-0.82px] desktop:tracking-[1.04px]">
          {" "}
          Ready for digital greatness? Hit us up, let’s discuss your next
          project.{" "}
        </h1>
       <Link href="mailto:hello@devbros.agency" target="_blank">
        <button className="tablet:w-1/3 desktop:w-1/4 flex py-[20px] bg-brand-100 rounded-lg  px-[40px] justify-center items-center">
          {" "}
          <span className="text-[17px] font-600 tracking-[0.68px] text-white">
            {" "}
            Let&apos;s work together{" "}
          </span>
        </button>
        </Link>
      </div>
    </section>
  );
}
