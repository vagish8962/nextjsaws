import Link from "next/link";

import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import useFetchData from "@/Hooks/useFetchData";
import Loading from "@/Commons/loading";
import SuccessModal from "@/Commons/SuccessModal";
import ErrorModal from "@/Commons/ErrorModal";

function ContactForm() {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorModal, setError] = useState(false);

  const [{ response, error, isLoading }, fetchData] = useFetchData();
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSuccess(false);
    console.log(data);
    const url = "https://na-lesp.unileversolutions.com/user/ca/users/contact-support";
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": "BXElVrdvo1ay5HE3v95ib1TQbHgc4I6faMBWUjuh",
      Authorization: `Bearer eyJraWQiOiIwbEg3V3J3SjgxczA5dW4yanUrQkE1YTdkY0RcL001VjV2TVoyRWd1MkIyND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlZWEyMTU1OS02MDdiLTQ1ODktYjViNy02MzBjMTE0NzYxNzUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfWWg2NFBlRjdKIiwiY29nbml0bzp1c2VybmFtZSI6ImVlYTIxNTU5LTYwN2ItNDU4OS1iNWI3LTYzMGMxMTQ3NjE3NSIsIm9yaWdpbl9qdGkiOiI4ZmExNDA1Yi00ZDMxLTRhNDgtOWZlNC1hZmRiYTZlOGQwYzEiLCJhdWQiOiJxMDYxaGRzYjlsbjJudTBxYTM0bzQxZTliIiwiZXZlbnRfaWQiOiJhNzE4Y2M4OC1iNjJiLTQzOGMtOGQzYy03ZGFlMDZiNTkwYWIiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY5MzkxMjA1MSwiZXhwIjoxNjkzOTE1NjUwLCJpYXQiOjE2OTM5MTIwNTEsImp0aSI6IjdiNmNmZjU4LTk2OGEtNGJiMi1hODEwLWM5NWY3MGM2MGExYiIsImVtYWlsIjoicHJpeWFuc2guZ3VwdGFAbGFuZ29vci5jb20ifQ.mgxlW1D3--dk5Ua_LavzePjZ3sgsfR7ogS3E_GsASxxhfMGZAhJGNHJ-ezK_j4Dyka-p7i2nYyNKucX5WQXmx6DqDd9re64oK1dFajAq6rh143J1dsfteIbeC9r1cICex7KKOPuZVCoGHI2Hv4hHjbqCa4dCrjtQ8hfWWADcaBGBHZhx0BvwmXgwF6vW0Y2ErDgaVVi6fvpoH0fkeNRClmVW83kSxJGY0RYd8koeKGDmQlsDUgWK4TrQZMzrey98q21udkNbTk6ZbRfjWbLvvSfsgc4SoYwwNQ1j2UwKjcV-gQO8GJRCzkr6MoBiy5jlgkZjiIpGhySxo4RZK3-qbA`,
    };
    const method = "POST";
    const body = {
      language: "en",
      subject: data.subject,
      body: data.message,
    };
    fetchData(url, headers, method, body);
  };

  if (response)
    console.log(response);

  useEffect(() => {
    if (response && !success)
      setSuccess(true);
  }, [response])

  useEffect(() => {
    if (error)
      setError(true);
  }, [error])

  const onClose = () => {
    setSuccess(false);
    setError(false);
  }

  return (
    <>
      <article className="basis-1/2">
        {isLoading && <Loading></Loading>}
        <SuccessModal showModal={success} onClose={onClose}></SuccessModal>
        <ErrorModal showModal={errorModal} onClose={onClose}></ErrorModal>
        <header className="pt-10 w-4/5">
          <h2 className="font-shireTypesPro text-3xl pb-5">Contact us form</h2>
          <p className="font-unilevershilling">
            You can use this form for any comments or questions about our company or brands.
          </p>
        </header>
        <form className="w-4/5 mb-5" onSubmit={handleSubmit(onSubmit)}>
          <label className="block text-sm pt-4 pb-1 font-unilevershillingMedium">
            <span className="after:content-['*'] after:ml-0.5 after:text-red block text-sm font-medium">
              Subject
            </span>
          </label>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="subject"
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 ${errors.email ? "border-red" : ""
              }`}
            value={subject}
            {...register("subject", {
              required: "Please select a subject",
            })}
            onChange={handleSubjectChange}
          >
            <option value="Select message subject">Select message subject</option>
            <option value="Coupons">Coupons</option>
            <option value="Receipts">Receipts</option>
            <option value="Do Good Rewards">Do Good Rewards</option>
            <option value="Technical Difficulty">Technical Difficulty</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && (
            <p className="text-red text-xs mt-1">{errors.subject.message}</p>
          )}
          <label className="block text-sm pt-4 pb-1 font-unilevershillingMedium">
            Your message
          </label>
          <textarea
            rows="6"
            className={`mt-1 px-3 py-2 block w-full text-sm rounded-xl ${errors.message ? "border-red" : ""
              }`}
            placeholder="Enter message details"
            value={message}
            {...register("message", {
              required: "Please provide a message",
            })}
            onChange={handleMessageChange}
          ></textarea>
          {errors.message && (
            <p className="text-red text-xs mt-1">{errors.message.message}</p>
          )}
          <div className={`flex items-center mb-4 mt-4 bg-white rounded-xl p-2`}>
            <input
              type="checkbox"
              className={`w-4 h-4  ${errors?.confirm ? "border-2 border-red" : ""}`}
              name="confirm"
              id="termsconditions"
              value=""
              aria-label="Terms and Conditions"
              {...register("confirm", {
                required: "Please confirm the Terms & Conditions",
              })}
            />
            <label htmlFor="termsconditions">
              <p className="ml-2 text-sm font-unilevershilling">
                I confirm that I am over 13 years old boy. By submitting this form agree to the{" "}
                <Link
                  href="https://www.unilevernotices.com/privacy-notices/global-english.html"
                  target="_blank"
                  className="text-green-800 underline underline-offset-1"
                >
                  Terms & Conditions
                </Link>
              </p>
            </label>
          </div>
          {errors.confirm && (
            <p className="text-red text-xs mt-1">{errors.confirm.message}</p>
          )}
          <button className="font-shireTypesPro bg-green-800 text-white text-base py-2 w-full rounded-xl mt-5">
            Send message
          </button>
        </form>

      </article>
    </>
  );
}

export default ContactForm;
