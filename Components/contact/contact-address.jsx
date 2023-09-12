import React from "react";
import youtube from "@/assets/images/youtube.svg";
import twitter from "@/assets/images/twitter.svg";
import instagram from "@/assets/images/instagram.svg";
import linkedin from "@/assets/images/linkedin.svg";
import facebook from "@/assets/images/facebook.svg";
import Link from "next/link";
import Image from "next/image";

function ContactAddress() {
  return (
    <>
      <article className="basis-1/2 mb-10">
        <div className="mt-5 bg-white rounded-lg px-10 py-5">
          <h4 className="font-unilevershillingMedium text-2xl mb-5">Get in Touch</h4>
          <h5 className="font-unilevershillingMedium text-xl">Telephone Contacts</h5>
          <p className="font-unilevershilling text-gray-500 py-2">If you would like to speak to a live representative please call use at:</p>
          <p className="font-unilevershillingMedium text-gray-500 pb-2">1-888-568-7644</p>
          <p className="font-unilevershilling text-gray-500 pb-5">We are avaiable Monday - Friday,<br />
            from 8:30 AM - 6:00 PM Eastern Time.</p>
          <hr className="p-3 border-t-2 border-gray-500" />
          <h5 className="font-unilevershillingMedium text-xl">Postal Address</h5>
          <p className="font-unilevershilling text-gray-500 py-2">Send us any queries through the mail though the address:</p>
          <p className="font-unilevershillingMedium text-gray-500 pb-5">Unilever Canada<br />
            160 Bloor Street East, Suit 1400 Toronto,<br />
            Ontario M$W 3R2<br />
            Canada</p>
          <hr className="p-3 border-t-2 border-gray-500" />
          <h5 className="font-unilevershillingMedium text-xl">Connect With Us</h5>
          <p className="font-unilevershilling text-gray-500 py-2">We’re always looking to connect through social media with those who share an interest in an sustainable future.</p>
          <ul className="flex space-x-5 mt-3">
            <li><Link href={"/"}>
              <Image src={youtube} alt="Reward Icon" width={50} height={50} layout="intrinsic" /></Link></li>
            <li><Link href={"/"}>
              <Image src={twitter} alt="Reward Icon" width={50} height={50} layout="intrinsic" /></Link></li>
            <li><Link href={"/"}>
              <Image src={instagram} alt="Reward Icon" width={50} height={50} layout="intrinsic" /></Link></li>
            <li><Link href={"/"}>
              <Image src={linkedin} alt="Reward Icon" width={50} height={50} layout="intrinsic" /></Link></li>
            <li><Link href={"/"}>
              <Image src={facebook} alt="Reward Icon" width={50} height={50} layout="intrinsic" /></Link></li>
          </ul>
        </div >
      </article >
    </>
  );
}
export default ContactAddress;