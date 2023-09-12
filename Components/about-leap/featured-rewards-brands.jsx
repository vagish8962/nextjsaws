import React from "react";
import Image from "next/image";
import Aboutbanner from "@/assets/images/about-leap-banner.jpg";
import Link from "next/link";

function FeaturedRewards() {
  return (
    <>
      <section className="bg-green-500 relative pb-10">
        <div className="container mx-auto px-5 lg:px-5">
          <h2 className="font-unilevershillingBold text-2xl lg:text-center sm:text-center text-left py-5 mb-5">Featured Leap Rewards brands</h2>


          <article className="mb-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
  
          <div className="group relative rounded-xl overflow-hidden bg-white">
            <Image
            src={Aboutbanner}
            alt=""
            //width={100}
            //height={50}
            layout="intrinsic"
            className="w-full"
          />
          
            <div className="px-3 py-3">
              <div className="text-lg font-unilevershillingMedium">
                <Link href={"/"} className="text-green-800">Learn more</Link>
              </div>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden bg-white">
            <Image
            src={Aboutbanner}
            alt=""
            //width={100}
            //height={50}
            layout="intrinsic"
            className="w-full"
          />
          
            <div className="px-3 py-3">
              <div className="text-lg font-unilevershillingMedium">
                <Link href={"/"} className="text-green-800">Learn more</Link>
              </div>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden bg-white">
            <Image
            src={Aboutbanner}
            alt=""
            //width={100}
            //height={50}
            layout="intrinsic"
            className="w-full"
          />
          
            <div className="px-3 py-3">
              <div className="text-lg font-unilevershillingMedium">
                <Link href={"/"} className="text-green-800">Learn more</Link>
              </div>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden bg-white">
            <Image
            src={Aboutbanner}
            alt=""
            //width={100}
            //height={50}
            layout="intrinsic"
            className="w-full"
          />
          
            <div className="px-3 py-3">
              <div className="text-lg font-unilevershillingMedium">
                <Link href={"/"} className="text-green-800">Learn more</Link>
              </div>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden bg-white">
            <Image
            src={Aboutbanner}
            alt=""
            //width={100}
            //height={50}
            layout="intrinsic"
            className="w-full"
          />
          
            <div className="px-3 py-3">
              <div className="text-lg font-unilevershillingMedium">
                <Link href={"/"} className="text-green-800">Learn more</Link>
              </div>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden bg-white">
            <Image
            src={Aboutbanner}
            alt=""
            //width={100}
            //height={50}
            layout="intrinsic"
            className="w-full"
          />
          
            <div className="px-3 py-3">
              <div className="text-lg font-unilevershillingMedium">
                <Link href={"/"} className="text-green-800">Learn more</Link>
              </div>
            </div>
          </div>

          

          </article>

        </div>
      </section>
    </>
  );
}
export default FeaturedRewards;
