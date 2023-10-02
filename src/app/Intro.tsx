import React from "react";

export default function Intro() {
  return (
    <section className="flex items-center justify-center px-[16px] py-[80px] tablet:px-[40px]  desktop:px-[80px] desktop:py-[120px] ">
      <h2 className="text-[27px] text-center tablet:text-left font-500 tablet:text-[33px] desktop:text-[41px] leading-[39.4px] tracking-[-0.27px] tablet:leading-[48px] text-black tablet:tracking-[-0.82px]">
        We&apos;re a small team of designers and developers in Accra,
        dedicated to empowering{" "}
        <span className="italic leading-[48px] text-brand-100">startups</span>{" "}
        and{" "}
        <span className="italic leading-[48px] text-brand-100">
          small businesses
        </span>{" "}
        with robust web applications. We create digital solutions that resonate
        with your audience and
        <span className="italic leading-[48px] text-brand-100"></span>{" "}
        <span className="italic leading-[48px] text-brand-100">
          deliver results
        </span>
        .
      </h2>
    </section>
  );
}
