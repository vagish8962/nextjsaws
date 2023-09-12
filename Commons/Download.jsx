import Link from "next/link";
import React from "react";
import { AiFillApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function Download({ text, platform }) {
  let icon;
  let link;
  if (platform === "App Store") icon = <AiFillApple size={45} color="white" />, link = "https://apps.apple.com/ca/app/leap-rewards-shop-for-good/id6444427555 F";
  else icon = <IoLogoGooglePlaystore size={45} color="white" />, link = "https://play.google.com/store/apps/details?id=com.unilever.regenerate.android ";
  return (
    <Link href={link} className="bg-black cursor-pointer flex flex-row md:flex-row justify-evenly items-center md:w-1/4 h-auto p-2 rounded-lg border-[0.16px] border-white mt-4 md:mt-0">
      {icon}
      <div className="md:ml-4 text-white">
        <p className="font-semibold tracking-wide text-md text-center md:text-left">
          {text}
        </p>
        <p className="font-semibold tracking-wide text-lg text-center md:text-left">
          {platform}
        </p>
      </div>
    </Link>
  );
}

export default Download;
