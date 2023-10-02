import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getCurrentTimeForTimeZone } from "../../utils/CurrentTime";
import { BiTimeFive } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

export default function Navbar() {
  const targetTimeZone = "Africa/Accra";

  return (
    <nav className="flex items-center py-[20px] px-[16px] justify-between  tablet:px-[40px] tablet:py-[20px] desktop:px-[80px] desktop:py-[40px] ">
      <div className="flex  tablet:p-0 items-center gap-[80px]">
        {/* logo */}
        <Image
          src="./agencylogo.svg"
          alt="Devbros logo"
          width={141}
          height={42}
        />
        {/* nav items */}
        <div className="hidden tablet:flex text-accent-100 text-[17px] font-600 tracking-[0.68px] items-start gap-[12px]">
          <Link href={"#services"}>Services</Link>
          <Link href={"#approach"}>Approach</Link>
          <Link href={"#outro"}>Contact Us </Link>
        </div>
      </div>
      <div className="flex p-[8px] tablet:p-0 gap-[16px] text-[14px] text-brand-100 font-[600] tracking-[0.56px] items-start">
        <p className="flex items-center gap-[8px]">
          {" "}
          <BiTimeFive /> {getCurrentTimeForTimeZone(targetTimeZone)}
        </p>
        <p className="flex items-center gap-[8px]">
          {" "}
          <CiLocationOn />
          Accra
        </p>
      </div>
    </nav>
  );
}
