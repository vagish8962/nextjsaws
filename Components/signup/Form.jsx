import SignUpOptions from "@/Commons/SignUpOptions";
import FormInputs from "./FormInputs";
import useFormContext from "@/Hooks/useFormContext";
import Modal from "@/Commons/Modal";
import { useRouter } from "next/router";
import { useState } from "react";

const Form = () => {
  const { page, setPage, data, title } = useFormContext();
  const router = useRouter();
  const handleNext = () => setPage((prev) => prev + 1);
  const [showModal, setShowModal] = useState(false);

  const handlePrev = () => {
    if (page == 0) router.push("/")
    else setPage((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log("Got it");
    console.log(JSON.stringify(data));
    setShowModal(true);
  };

  const content = (
    <div className="flex flex-col md:mb-10 md:mt-12 w-full px-4 md:w-[600px] md:mx-auto">
      <Modal showModal={showModal}></Modal>
      <button
        className="font-bold text-lg tracking-wider -ml-96 absolute"
        onClick={handlePrev}
      >
        {"< Back"}
      </button>
      {page === 0 && (
        <div>
          <h1 className="text-3xl md:mb-10 md:text-4xl text-center text-primary-green font-black">
            SIGN UP & CLAIM YOUR FIRST $2 Coupon
          </h1>
          <div className="flex flex-col md:flex-row justify-center mt-6 md:justify-between">
            <SignUpOptions provider="Google"></SignUpOptions>
            <SignUpOptions provider="Apple"></SignUpOptions>
          </div>
        </div>
      )}
      <header className="form-header flex justify-between mt-8">
        <div
          className={`w-1/2 md:w-[45%] flex flex-col ${page == 0 ? "" : "opacity-60"
            }`}
        >
          <p className="text-primary-green font-bold text-lg text-center md:text-left">
            Step 1
          </p>
          <div className="border-2 border-primary-green mx-auto md:mx-0"></div>
        </div>
        <div
          className={`w-1/2 md:w-[45%] flex flex-col ${page == 1 ? "" : "opacity-60"
            }`}
        >
          <p className="text-primary-green font-bold text-lg text-center md:text-left">
            Step 2
          </p>
          <div className="border-2 border-primary-green mx-auto md:mx-0"></div>
        </div>
      </header>
      <FormInputs handleNext={handleNext} onRegister={handleSubmit} />
    </div>
  );
  return content;
};

export default Form;
