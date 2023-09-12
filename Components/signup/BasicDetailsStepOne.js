import React, { useState } from "react";
import useFormContext from "@/Hooks/useFormContext";
import { useForm } from "react-hook-form";
import Error from "@/Commons/Errors";

const BasicDetailsStepOne = (props) => {
  const { data, handleChange } = useFormContext();

  const [showPasswordRequirements, setShowPasswordRequirements] =
    useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = () => {
    props.handleNext();
  };

  // console.log(data);

  const calculateProgress = () => {
    let progress = 0;
    if (password.length >= 8) progress += 20;
    if (/^(?=.*\d)/.test(password)) progress += 20;
    if (/^(?=.*[!@#$%^&*])/.test(password)) progress += 20;
    if (/^(?=.*[a-z])/.test(password)) progress += 20;
    if (/^(?=.*[A-Z])/.test(password)) progress += 20;

    return progress;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-col mt-4">
      <div className="mb-4 flex flex-col">
        <label htmlFor="email" className="font-bold mb-2">
          Email
        </label>
        <input
          placeholder="Enter email"
          className={`py-3 px-6 rounded-lg ${
            errors.email ? "border-2 border-red" : ""
          }`}
          type="text"
          id="email"
          name="email"
          value={data.email}
          {...register("email", {
            required: "Please provide an email address",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
            onChange: (e) => handleChange(e),
          })}
        />
        {errors.email && <Error message={errors.email.message}></Error>}
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="password" className="font-bold mb-2">
          Password
        </label>
        <input
          placeholder="Create a Password"
          className={`py-3 px-6 rounded-lg ${
            errors.password ? "border-2 border-red" : ""
          }`}
          type="password"
          id="password"
          name="password"
          value={data.password}
          {...register("password", {
            required: "Please provide a password",
            minLength: {
              value: 8,
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            },
            onChange: (e) => {
              handleChange(e);
              setShowPasswordRequirements(true);
            },
          })}
          onFocus={() => setShowPasswordRequirements(true)}
          onBlur={() => setShowPasswordRequirements(false)}
        />
        {errors.password && <Error message={errors.password.message}></Error>}
        {showPasswordRequirements && (
          <div>
            <div className="mt-3 w-full bg-white h-1 rounded-lg overflow-hidden">
              <div
                className="bg-black h-1 rounded-lg"
                style={{
                  width: `${calculateProgress()}%`,
                  transition: "width 0.2s ease-in-out",
                }}
              ></div>
            </div>
            <p className="font-bold">Password requirements ⓘ</p>
            <div className="mt-2 bg-white p-6 rounded-lg">
              <p className="text-gray-600 text-lg tracking-wider">
                <span
                  className={password.length >= 8 ? "text-green" : "text-red"}
                >
                  {password.length >= 8 ? "✓" : "✕"} 8 characters minimum
                </span>
                <br />
                <span
                  className={
                    /^(?=.*\d)/.test(password) ? "text-green" : "text-red"
                  }
                >
                  {/^(?=.*\d)/.test(password) ? "✓" : "✕"} 1 Number
                </span>
                <br />
                <span
                  className={
                    /^(?=.*[!@#$%^&*])/.test(password)
                      ? "text-green"
                      : "text-red"
                  }
                >
                  {/^(?=.*[!@#$%^&*])/.test(password) ? "✓" : "✕"} 1 Special
                  character
                </span>
                <br />
                <span
                  className={
                    /^(?=.*[a-z])/.test(password) ? "text-green" : "text-red"
                  }
                >
                  {/^(?=.*[a-z])/.test(password) ? "✓" : "✕"} 1 Lowercase letter
                </span>
                <br />
                <span
                  className={
                    /^(?=.*[A-Z])/.test(password) ? "text-green" : "text-red"
                  }
                >
                  {/^(?=.*[A-Z])/.test(password) ? "✓" : "✕"} 1 Uppercase letter
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="repassword" className="font-bold mb-2">
          Re-enter Password
        </label>
        <input
          placeholder="Confirm your password"
          className={`py-3 px-6 rounded-lg ${
            errors.repassword ? "border-2 border-red" : ""
          }`}
          type="password"
          id="repassword"
          name="repassword"
          value={data.repassword}
          {...register("repassword", {
            required: "Please re-enter your password",
            validate: (value) =>
              value === data.password || "Passwords do not match",
            onChange: (e) => handleChange(e),
          })}
        />
        {errors.repassword && (
          <Error message={errors.repassword.message}></Error>
        )}
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="promocode" className="offscreen font-bold mb-2">
          Promocode{" "}
          <span className="font-bold text-gray opacity-30">{"(Optional)"}</span>
        </label>
        <input
          placeholder="Enter your promo or referral code"
          className="py-3 px-6 rounded-lg"
          type="text"
          id="promocode"
          name="promocode"
          value={data.promocode}
          onChange={handleChange}
        />
      </div>
      <button
        className="bg-primary-green cursor-pointer w-full mt-6 text-lg text-white font-bold py-3 px-6 rounded-lg"
        type="submit"
      >
        Next
      </button>
    </form>
  );
};

export default BasicDetailsStepOne;
