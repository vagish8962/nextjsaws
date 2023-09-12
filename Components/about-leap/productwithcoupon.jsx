import React from "react";
import Image from "next/image";
import Productimg from "@/assets/images/product-image.png";
//import Link from "next/link";

function ProductEarnpoint() {
  return (
    <>
      <section className="bg-green-500 relative pb-10">
        <div className="container mx-auto px-5 lg:px-5">
          <h2 className="font-unilevershillingBold text-2xl lg:text-center sm:text-center text-left py-5 mb-5">Buy these Dove products to earn points with your coupon.</h2>


          <article className="mb-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
            
          <div className="group relative rounded-2xl overflow-hidden bg-white">
            <Image
            src={Productimg}
            alt=""
            //width={100}
            //height={50}
            layout="intrinsic"
            className="w-full"
          />
          
            <div className="px-4 py-4">
              <div className="text-lg mb-2 font-unilevershilling">Dove kids care bubble bath for kids coconut...</div>
              <div className="bg-orange-900 inline-block rounded-xl p-1.5 text-xs font-unilevershilling"><span className="font-semibold font-unilevershillingMedium">+100</span> coins</div>
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
          
            <div className="px-4 py-4">
              <div className="text-lg mb-2 font-unilevershilling">Dove kids care bubble bath for kids coconut...</div>
              <div className="bg-orange-900 inline-block rounded-xl p-1.5 text-xs font-unilevershilling"><span className="font-semibold font-unilevershillingMedium">+100</span> coins</div>
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
          
            <div className="px-4 py-4">
              <div className="text-lg mb-2 font-unilevershilling">Dove kids care bubble bath for kids coconut...</div>
              <div className="bg-orange-900 inline-block rounded-xl p-1.5 text-xs font-unilevershilling"><span className="font-semibold font-unilevershillingMedium">+100</span> coins</div>
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
          
            <div className="px-4 py-4">
              <div className="text-lg mb-2 font-unilevershilling">Dove kids care bubble bath for kids coconut...</div>
              <div className="bg-orange-900 inline-block rounded-xl p-1.5 text-xs font-unilevershilling"><span className="font-semibold font-unilevershillingMedium">+100</span> coins</div>
            </div>
          </div>  
          </article>

        </div>
      </section>
    </>
  );
}
export default ProductEarnpoint;
