import React from "react";
import Image from "next/image";
import Banner1 from "@/assets/images/herobanner.jpg";

import Link from "next/link";

function HeroBanner() {
  return (
    <>
      <section className="bg-green-500 relative pt-28">
      <Image
          src={Banner1}
          alt="Hero Banner"
          className="w-full lg:h-[400px]"
          //width={100} //height={50}
          layout="intrinsic"
        />
        <article className="container mx-auto">
          <div className="w-2/6 absolute xl:bottom-1/4 md:bottom-24">
            <h1 className="text-5xl text-black mb-5 uppercase font-shireTypesPro">
              Shop, earn and do good with{" "}
              <span className="text-green-800">Leap Rewards</span>
            </h1>
            <p className="text-lg text-black mb-5 font-unilevershilling">
              Browse the Leap Rewards catalogue to find out more about our
              sustainable products. Upload or scan your receipts to earn coins
              and unlock rewards!
            </p>
            <Link
              href={"/sign-up"}
              className="text-white flex flex-col bg-green-800 p-3 justify-center items-center font-unilevershillingMedium rounded-xl w-96 text-lg"
            >
              CREATE AN ACCOUNT
              <p className="font-unilevershilling text-base">
                and claim your $2 coupon
              </p>
            </Link>
            <Link href={"/sign-in"} className="mt-5 flex justify-center w-96 text-green-800 font-unilevershilling">Log in if you have an account</Link>
          </div>
        </article>
      </section>
    </>
  );
}
export default HeroBanner;
