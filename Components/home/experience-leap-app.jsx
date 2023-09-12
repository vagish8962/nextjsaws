import React from "react";
import Image from "next/image";
import appimg from "@/assets/images/mobile-app.png";
import appstore from "@/assets/images/appstore.svg";
import googleplay from "@/assets/images/googleplay.svg";
import Link from "next/link";
import { appstoreLink, playstoreLink } from "@/constants";
function ExperienceApp() {
  return (
    <>
      <section className="relative experience-section-bg py-32">
        <article className="container mx-auto">
          <div className="flex lg:flex-row flex-col lg:space-x-4 mx-3 lg:mx-0">
            <article className="basis-1/2 md:basis-1/2 sm:basis-1">
              <div className="flex lg:flex-col justify-center h-full lg:w-3/4 lg:pl-20">
                <h3 className="text-black uppercase lg:text-4xl font-shireTypesPro">
                  Experience <br /> Leap Rewards <br />
                  <span className="text-green-900">
                    app on mobile for rewards & other exciting offers
                  </span>
                </h3>

                <article className="flex lg:flex-row pt-10">
                  <div className="pr-5">
                    <Link href={appstoreLink}>
                      <Image
                        src={appstore}
                        alt="Play Store"
                        layout="intrinsic"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href={playstoreLink}>
                      <Image
                        src={googleplay}
                        alt="Play Store"
                        layout="intrinsic"
                      />
                    </Link>
                  </div>
                </article>
              </div>
            </article>

            <article className="basis-1/2 md:basis-1/2 sm:basis-1">
              <Image
                src={appimg}
                alt="Leap Rewards App Image"
                //width={100} //height={50}
                layout="intrinsic"
              />
            </article>
          </div>
        </article>
      </section>
    </>
  );
}
export default ExperienceApp;
