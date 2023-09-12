import React from "react";
import Image from "next/image";
import everybanner from "@/assets/images/banner.jpg";
//import Link from "next/link";

function SingleBanner() {
  return (
    <>
      <section className="bg-green-500 relative">
        <div>
        <Image
          src={everybanner}
          alt=""
          className="w-full"
          //width={100} //height={50}
          layout="intrinsic"
        />
        <p className="font-unilevershilling text-base text-gray-600 py-10 px-5 lg:px-48 lg:text-center sm:text-center text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
      </section>
    </>
  );
}
export default SingleBanner;
