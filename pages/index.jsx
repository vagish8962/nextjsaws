import React from "react";
import HeroBanner from "@/Components/home/hero-banner";
import ExperienceApp from "@/Components/home/experience-leap-app";
import InsideApp from "@/Components/home/inside-app";
import Ecohacks from "@/Components/home/ecohacks";

function Homepage() {
  return (
    <>
      <article>
        <div className="w-full mx-auto">
          <HeroBanner />
          <ExperienceApp />
          <InsideApp />
          <Ecohacks />
        </div>
      </article>
    </>
  );
}
Homepage.title = 'Leap Home';

export default Homepage;
