import React from "react";
import Image from "next/image";
import UnileverLogo from "@/assets/images/unilever-logo.svg"

const navigationItems = [
  { label: 'Contact Us', link: '/contact-us/' },
  { label: 'FAQ', link: '/faqs' },
  { label: 'Terms & Conditions', link: '/terms-and-conditions/' },
  { label: 'Legal', link: 'https://www.unilever.ca/legal/' },
  { label: 'Accessibility', link: 'https://www.unilever.ca/accessibility/' },
  { label: 'Privacy Notice', link: 'https://www.unilevernotices.com/privacy-notices/canada-english.html' },
];

function FooterMenu() {
  return (
    <>
    <article className="flex flex-col  md:flex-col lg:flex-row justify-between py-10 border-t-2 mt-10 border-color">
      <div className="flex items-center">
        <Image src={UnileverLogo} alt="Unilever Logo" className="h-16 w-16 mr-5" />
        <p className="font-unilevershilling text-white text-base">© 2023 Copyright Unilever</p>
      </div>
    
      <div className="font-unilevershilling flex flex-col lg:flex-row items-start lg:items-center mt-5 md:mt-5 lg:mt-0">
        {navigationItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-white text-base md:text-lg mb-2 md:pr-5 pr-5 hover:underline">
            {item.label}
          </a>
        ))}
      </div>
    </article>
    </>
  );
}

export default FooterMenu;
