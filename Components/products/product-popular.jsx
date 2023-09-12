import React from "react";
import Productimg from "@/assets/images/product-image.png";
import Image from "next/image";


function ProductPopular() {
  
  return (
    <>
      <section className="mb-20">
            <div className="flex justify-between">
              <h2 className="text-2xl text-black mb-5 font-unilevershillingMedium">Most Popular</h2>
            </div>
            
  
          <article className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
  
          <div className="group relative rounded-2xl overflow-hidden bg-white">
            <Image
            src={Productimg}
            alt=""
            //width={100}
            //height={50}
            layout="intrinsic"
            className="w-full"
          />
          <div className="px-4 pt-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-black mr-2 mb-2">sustainably sourced</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-black mr-2 mb-2">sustainably sourced</span>
            </div>
            <div className="px-4 py-4">
              <div className="text-lg mb-2">Love Beauty And Planet Shampoo</div>
              <div className="bg-orange-900 inline-block rounded-xl p-1.5 text-xs"><span className="font-semibold">+100</span> coins</div>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden bg-white">
            <Image
            src={Productimg}
            alt=""
            //width={100}
            //height={50}
            layout="intrinsic"
            className="w-full"
          />
          <div className="px-4 pt-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-black mr-2 mb-2">sustainably sourced</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-black mr-2 mb-2">sustainably sourced</span>
            </div>
            <div className="px-4 py-4">
              <div className="text-lg mb-2">Love Beauty And Planet Shampoo</div>
              <div className="bg-orange-900 inline-block rounded-xl p-1.5 text-xs"><span className="font-semibold">+100</span> coins</div>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden bg-white">
            <Image
            src={Productimg}
            alt=""
            //width={100}
            //height={50}
            layout="intrinsic"
            className="w-full"
          />
          <div className="px-4 pt-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-black mr-2 mb-2">sustainably sourced</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-black mr-2 mb-2">sustainably sourced</span>
            </div>
            <div className="px-4 py-4">
              <div className="text-lg mb-2">Love Beauty And Planet Shampoo</div>
              <div className="bg-orange-900 inline-block rounded-xl p-1.5 text-xs"><span className="font-semibold">+100</span> coins</div>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden bg-white">
            <Image
            src={Productimg}
            alt=""
            //width={100}
            //height={50}
            layout="intrinsic"
            className="w-full"
          />
          <div className="px-4 pt-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-black mr-2 mb-2">sustainably sourced</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-black mr-2 mb-2">sustainably sourced</span>
            </div>
            <div className="px-4 py-4">
              <div className="text-lg mb-2">Love Beauty And Planet Shampoo</div>
              <div className="bg-orange-900 inline-block rounded-xl p-1.5 text-xs"><span className="font-semibold">+100</span> coins</div>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden bg-white">
            <Image
            src={Productimg}
            alt=""
            //width={100}
            //height={50}
            layout="intrinsic"
            className="w-full"
          />
          <div className="px-4 pt-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-black mr-2 mb-2">sustainably sourced</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-black mr-2 mb-2">sustainably sourced</span>
            </div>
            <div className="px-4 py-4">
              <div className="text-lg mb-2">Love Beauty And Planet Shampoo</div>
              <div className="bg-orange-900 inline-block rounded-xl p-1.5 text-xs"><span className="font-semibold">+100</span> coins</div>
            </div>
          </div>
          </article>

      </section>
    </>
  );
}
export default ProductPopular;
