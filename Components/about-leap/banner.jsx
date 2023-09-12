import React from "react";
import Image from "next/image";
import Aboutbanner from "@/assets/images/about-leap-banner.jpg";
//import Link from "next/link";

function Banner() {
  return (
    <>
      <section className="bg-green-500 relative">
        <div className="container mx-auto px-5 lg:px-5">
          <h2 className="font-unilevershillingBold lg:text-center sm:text-center text-left py-5 mb-5 text-2xl">Sustainable action everyday</h2>
        <Image
          src={Aboutbanner}
          alt=""
          className="w-full rounded-3xl"
          //width={100} //height={50}
          layout="intrinsic"
        />
        <p className="font-unilevershilling text-base text-gray-600 py-5 lg:px-24 lg:text-center sm:text-center text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
      </section>
    </>
  );
}
export default Banner;
