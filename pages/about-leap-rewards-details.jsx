import React from "react";
import SingleBanner from "@/Components/about-leap/single-banner";
import ProductEarnpoint from "@/Components/about-leap/productwithcoupon";


function SingleAboutleap() {
  return (
    <>
      <article>
        <div className="w-full mx-auto">
          <SingleBanner />
          <ProductEarnpoint />
        </div>
      </article>
    </>
  );
}
SingleAboutleap.title = 'About Leap rewards';

export default SingleAboutleap;
