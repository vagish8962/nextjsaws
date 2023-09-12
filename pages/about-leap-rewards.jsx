import React from "react";
import Banner from "@/Components/about-leap/banner";
import FeaturedRewards from "@/Components/about-leap/featured-rewards-brands";


function AboutLeap() {
  return (
    <>
      <article>
        <div className="w-full mx-auto">
          <Banner />
          <FeaturedRewards />
        </div>
      </article>
    </>
  );
}
AboutLeap.title = 'About Leap rewards';

export default AboutLeap;
