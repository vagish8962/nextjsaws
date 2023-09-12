import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useFormContext from "@/Hooks/useFormContext";
import Error from "@/Commons/Errors";
//import Link from "next/link";

const CreatePassword = (props) => {
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
    console.log(data);
  };
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
          Unique Code
        </label>
        <input
          placeholder="Enter code"
          className={`py-3 px-6 rounded-lg ${
            errors.email ? "border-2 border-red" : ""
          }`}
          type="text"
          id="code"
          name="code"
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="password" className="font-bold mb-2">
          Password
        </label>
        <input
          placeholder="Enter a new Password"
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
          Confirm New Password
        </label>
        <input
          placeholder="Re-enter new password"
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
      <button
        className="bg-primary-green cursor-pointer w-full mt-6 text-lg text-white font-bold py-3 px-6 rounded-lg"
        type="submit"
      >
        Confirm
      </button>
      <button
        className="text-primary-green cursor-pointer w-full mt-6 text-lg bg-white border-4 border-primary-green font-bold py-3 px-6 rounded-lg"
        type="button"
      >
        Resend Code
      </button>
    </form>
  );
};

export default CreatePassword;
