import React from "react";
import Image from "next/image";
import sustainable from "@/assets/icons/sustainable.png";
import unlockrewards from "@/assets/icons/unlock-rewards.png";
import scan from "@/assets/icons/scan.png";
import rewards from "@/assets/icons/reward.png";

function InsideApp() {
  return (
    <>
      <section className="bg-green-900 pb-32">
        <article className="container mx-auto">
          <div className="flex lg:flex-row flex-col justify-center lg:space-x-4 mx-3 mb-10">
              <h2 className="text-white font-bold lg:text-3xl font-unilevershillingMedium">What can I do inside the app?</h2>
           </div> 
            
           <div className="flex lg:flex-row flex-col lg:space-x-4 mx-3 lg:mx-0">
              <article className="basis-1/4 flex flex-col items-center text-center">
                    <Image
                        src={sustainable}
                        alt="Play Store"
                        layout="intrinsic"
                        className="mb-8"
                      />
                <h3 className="text-white lg:text-xl mb-2 font-unilevershillingMedium">Find more sustainable products</h3>
                <p className="text-white text-base font-unilevershilling">Browse more sustainable products in the Leap Rewards catalogue and learn why these products are better. </p>
              </article>

              <article className="basis-1/4 flex flex-col items-center text-center">
              <Image
                        src={unlockrewards}
                        alt="Unlock rewards"
                        layout="intrinsic"
                        className="mb-8"
                      />
                <h3 className="text-white lg:text-xl mb-2 font-unilevershillingMedium">Unlock rewards</h3>
                <p className="text-white text-base font-unilevershilling">Based on the total coins you’ve earned, unlock rewards like donating a meal, planting a tree or access to special deals in the reward centre.</p>
              
              </article>

              <article className="basis-1/4 flex flex-col items-center text-center">
              <Image
                        src={scan}
                        alt="Scan your receipt to earn coins"
                        layout="intrinsic"
                        className="mb-8"
                      />
                <h3 className="text-white lg:text-xl mb-2 font-unilevershillingMedium">Scan your receipt to earn coins</h3>
                <p className="text-white text-base font-unilevershilling">Upload or scan your receipt and earn coins on the more sustainable products!</p>
              </article>

              <article className="basis-1/4 flex flex-col items-center text-center">
              <Image
                        src={rewards}
                        alt="Play Store"
                        layout="intrinsic"
                        className="mb-8"
                      />
                <h3 className="text-white lg:text-xl mb-2 font-unilevershillingMedium">Reward yourself With coupons redeemable at Walmart</h3>
                <p className="text-white text-base font-unilevershilling">Spend your coins to claim coupons and gift cards redeemable at Walmart.</p>
              </article>
            </div>    
         
        </article>
      </section>
    </>
  );
}
export default InsideApp;
