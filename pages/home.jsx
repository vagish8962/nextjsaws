import React from "react";
import Ecohacks from "@/Components/home/ecohacks";
import RewardCoupons from "@/Components/home/reward-coupons";

function Homepage() {
  return (
    <>
      <article>
        <div className="w-full mx-auto">
          <RewardCoupons />
          <Ecohacks />
        </div>
      </article>
    </>
  );
}
export default Homepage;
