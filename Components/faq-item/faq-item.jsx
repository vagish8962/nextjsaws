import React from "react";
//import Image from "next/image";
//import Link from "next/link";



function FaqItem({ faq, index, toggleFAQ }) {
  return (
    <>

    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index} onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question font-unilevershillingMedium text-2xl border-t-2 border-black py-3">{faq.question}</div>
      <div className="faq-answer font-unilevershilling">
        <p className="pb-5 pl-5">{faq.answer}</p></div>
    </div>
    </>
  );
}
export default FaqItem;
