import React from "react";
import Link from "next/link";

function SidebarTabs() {
  return (
    <>
      
        <article className="bg-green-800 p-10 rounded-xl mb-5">
          <p className="text-white lg:text-lg font-unilevershillingMedium mb-5">
            Reward yourself with coupons redeemable at Walmart
          </p>
          <Link
            href={"/"}
            className="bg-white text-green-800 font-shireTypesPro rounded-xl py-3 px-6"
          >
            Sign in / Sign up
          </Link>
        </article>
        {/* ------------- */}
        
      
    </>
  );
}
export default SidebarTabs;
