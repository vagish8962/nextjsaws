import React from "react";
import ContactForm from "@/Components/contact/contact-form";
import ContactAddress from "@/Components/contact/contact-address";

function ContactUs() {
  return (
    <>
      <section className="bg-blue-100">
        <div className="container mx-auto">
          <article className="flex lg:flex-row flex-col lg:space-x-4 mx-3 lg:mx-0">
            <ContactForm />
            <ContactAddress />
          </article>
        </div>
      </section>
    </>
  );
}
export default ContactUs;
