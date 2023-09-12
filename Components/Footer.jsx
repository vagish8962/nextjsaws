import React, { useEffect } from "react";
//import Download from "@/Commons/Download";
import FooterMenu from "@/Commons/FooterMenu";
import appstore from "@/assets/images/appstore.svg";
import googleplay from "@/assets/images/googleplay.svg";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  useEffect(() => {
    function append(scriptid, url, async) {
      var d = document,
        sn = "script",
        f = d.getElementsByTagName(sn)[0];
      if (!f) f = d.head;
      var s = d.createElement(sn);
      s.async = async;
      s.id = scriptid;
      s.src = url;
      s.charset = "utf-8";
      f.parentNode.insertBefore(s, f);
    }

    function is2parttld(value) {
      var tldindicators = [
        "co",
        "com",
        "info",
        "web",
        "info",
        "gov",
        "edu",
        "biz",
        "net",
        "org",
      ];
      var countryindicators = [
        "uk",
        "us",
        "fr",
        "es",
        "de",
        "at",
        "au",
        "ae",
        "be",
        "br",
        "ca",
        "ch",
        "cn",
        "co",
        "cz",
        "dk",
        "eg",
        "eu",
        "fi",
        "gb",
        "gr",
        "hk",
        "hr",
        "hu",
        "ie",
        "in",
        "jp",
        "mx",
        "nl",
        "no",
        "nz",
        "pl",
        "ro",
        "ru",
        "se",
      ];
      return (
        tldindicators.indexOf(value) !== -1 ||
        countryindicators.indexOf(value) !== -1
      );
    }

    function getRootDomain() {
      var parts = window.location.hostname.split(".");
      if (parts.length === 2) rootDomain = parts[0];
      else if (parts.length > 2) {
        // see if the next to last value is a common tld
        var part = parts[parts.length - 2];
        if (is2parttld(part)) {
          rootDomain = parts[parts.length - 3]; // go back one more
        } else {
          rootDomain = part;
        }
      }

      return rootDomain;
    }

    window.evidon = {};
    window.evidon.id = 2523;
    window.evidon.test = false; // set to true for non-production testing.
    // window.evidon.userid = '';

    var cdn = "//c.evidon.com/",
      rootDomain = getRootDomain(),
      noticecdn = cdn + "sitenotice/";
    append("evidon-notice", noticecdn + "evidon-sitenotice-tag.js", false);
    append("evidon-location", cdn + "geo/country.js", true);
    append(
      "evidon-themes",
      noticecdn + window.evidon.id + "/snthemes.js",
      true
    );
    if (rootDomain)
      append(
        "evidon-settings",
        noticecdn +
          window.evidon.id +
          "/" +
          rootDomain +
          (window.evidon.test ? "/test" : "") +
          "/settingsV2.js",
        true
      );

    // Load the additional script
    append("evidon-script", "https://c.evidon.com/dg/dg.js", true);

    window.evidon.priorConsentCallback = function (
      categories,
      vendors,
      cookies
    ) {
      // add the tags which need to wait for prior consent
      // here.  This should be all your advertising tags and
      // probably most of your social and tracking tags.
    };

    window.evidon.closeCallback = function () {
      // this is executed if the user closed a UI element without either Accepting (providing consent)
      // or Declining (declining to provide consent).
    };

    window.evidon.consentWithdrawnCallback = function () {
      // this is executed if the user withdraws consent and elects to
      // no longer allow technologies to run on the site.
    };

    window.evidon.consentDeclinedCallback = function () {
      // this is executed if the user explicitly declines giving consent by
      // using a Decline button
    };
  }, []);

  return (
    <div className="bg-green-900">
    <div className="container mx-auto">
      <div className="w-full md:w-1/2 flex flex-col items-center h-[100%] mx-auto px-4 md:px-0 pt-10">
        <h1 className="text-white text-xl lg:text-lg  font-unilevershillingMedium text-center">
          Experience Leap Rewards app on mobile
          <br /> for rewards & other exciting offers
        </h1>
        <article className="flex lg:flex-row pt-10">
                  <div className="pr-5">
                    <Link href={"/"}>
                      <Image
                        src={appstore}
                        alt="Play Store"
                        layout="intrinsic"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href={"/"}>
                      <Image
                        src={googleplay}
                        alt="Play Store"
                        layout="intrinsic"
                      />
                    </Link>
                  </div>
                </article>
        
      </div>
      
      <FooterMenu />
    </div>
    </div>
  );
}

export default Footer;
