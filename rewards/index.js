import React, { useState } from "react";
import SidebarTabs from "@/Components/rewards/sidebar";
// import cardimg from "@/assets/images/herobanner.jpeg";
import Image from "next/image";
import Link from "next/link";
import DoGoodRewards from '@/Components/rewards/do_good_rewards';
import Coupons from '@/Components/rewards/coupons';
import CouponFilter from '@/Components/rewards/couponFilter';

function RewardsList() {
  const [isActive, setIsActive] = useState({
    id: "rewardstab",
  });
  const [filter, setFilter] = useState()
  const hideShowDiv = (e) => {
    setIsActive({
      id: e.target.id,
    });
  };
  const onFilter = (data) => { setFilter(data) }
  return (
    <>
      <article className="bg-orange-600 pt-20 pb-20">
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col lg:space-x-4 mx-3 lg:mx-0">
            <div className="basis-1/4 h-full lg:sticky top-0">
              <SidebarTabs />
              <article className="flex flex-col">
                <button id="rewardstab" onClick={(e) => { hideShowDiv(e) }}
                  className={`${isActive.id === "rewardstab"
                    ? "bg-white bg-opacity-100 font-unilevershillingMedium"
                    : ""
                    } bg-black bg-opacity-10 font-unilevershilling py-3 rounded-xl mb-2`}>Do Good Rewards
                </button>
                <button id="couponstab" onClick={(e) => { hideShowDiv(e) }}
                  className={`${isActive.id === "couponstab"
                    ? "bg-white bg-opacity-100 font-unilevershillingMedium"
                    : ""
                    } bg-black bg-opacity-10 font-unilevershilling py-3 rounded-xl mb-2`}>Coupons</button>
                <div className={
                  isActive.id === "couponstab"
                    ? `couponstab`
                    : "couponstab hidden"
                }>
                  <CouponFilter onFilter={onFilter} />
                </div>
              </article>
            </div>
            {/* ---- Tab Content ----        */}
            <div className="basis-9/12 pl-0 lg:pl-20">
              <article
                className={
                  isActive.id === "rewardstab"
                    ? `rewardstab`
                    : "rewardstab hidden"
                }>
                <DoGoodRewards />
              </article>
              <article
                className={
                  isActive.id === "couponstab"
                    ? `couponstab`
                    : "couponstab hidden"
                }>
                <div className="font-unilevershilling mb-5 lg:w-3/4 mt-5 lg:mt-0">Choose which brand you’d like a coupon from, then use your coupon to buy our better products. Learn more</div>
                <Coupons filter={filter} />
              </article>
            </div>
            {/* ---- Tab Content ----        */}
          </div>
        </div>
      </article>
    </>
  );
}
RewardsList.title = "Leap Rewards";

export default RewardsList;
