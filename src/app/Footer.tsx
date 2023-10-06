import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <section
      className="flex flex-col gap-[24px] tablet:gap-[0]
     tablet:flex-row justify-between pb-[40px] px-[40px] desktop:px-[80px]"
    >
      <div className="flex items-center justify-center tablet:items-start gap-[12px] text-[17px] font-[600] tracking-[0.68px]">
        <Link href={""}>Dribbble</Link>
        <Link
          href={"https://instagram.com/devbrosagency?igshid=MzRlODBiNWFlZA=="}
          target="_blank"
        >
          Instagram
        </Link>
        <Link href={"https://twitter.com/DevBrosAgency"} target="_blank">
          Twitter
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="./agencylogo.svg"
          alt="Devbros logo"
          width={141}
          height={42}
        />
      </div>
    </section>
  );
}
