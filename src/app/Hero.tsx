import React from "react";
import Image from "next/image";

export default async function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-[16px]  tablet:px-[40px] py-[80px] desktop:px-[80px] desktop:py-[120px] gap-[24px] tablet:gap-[80px] desktop:gap-[160px]">
      <div className="flex-col-reverse tablet:flex-row  flex w-full items-start gap-[27px]">
        {/* first div */}

        <div className="tablet:w-1/2 flex bg-brand-50 flex-col justify-center gap-[40px] tablet:gap-[80px] shrink-0 items-stretch py-[40px] px-[20px] tablet:py-[80px] tablet:px-[40px]">
          <h1 className="text-brand-100 text-[33px] tablet:text-[41px] desktop:text-[50px] tablet:leading-[49px] desktop:leading-[54px] tablet:tracking-[-0.82px] desktop:tracking-[-1.04px] font-400">
            We specialize in creating delightful and robust web solutions
          </h1>
          <button className="tablet:w-1/2 flex py-[20px] bg-brand-100 rounded-lg  px-[40px] justify-center items-center">
            {" "}
            <span className="text-[17px] font-600 tracking-[0.68px] text-white">
              {" "}
              Let&apos;s work together{" "}
            </span>
          </button>
        </div>
        {/* second div */}
        <div className="tablet:w-1/2">
          <Image
            src={"./mockups.svg"}
            alt="projects"
            width={361}
            className="w-full h-full"
            height={300}
          />
        </div>
      </div>
      {/* logo cloud */}
      <div className="pt-[80px] tablet:pt-0 flex flex-wrap items-center gap-x-[24px] gap-y-[40px] tablet:gap-[80px] justify-center">
        <Image
          src="./smoove.svg"
          alt="logo"
          width={100}
          height={51}
          className="desktop:w-[190px] desktop:h-[60px] filter grayscale"
        />
        <Image
          src="./proresumeai.svg"
          alt="logo"
          width={110}
          height={70}
          className="desktop:w-[190px] desktop:h-[60px] filter grayscale"
        />
        <Image
          src="./typelabs.svg"
          alt="logo"
          width={100}
          height={51}
          className="desktop:w-[160px] desktop:h-[30px] filter grayscale"
        />
      </div>
    </section>
  );
}
