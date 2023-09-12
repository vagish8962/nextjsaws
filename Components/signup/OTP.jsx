import React, { useState, useRef, useEffect } from "react";
import { verifyUser } from "./cognito";
import useFormContext from "@/Hooks/useFormContext";
import { useRouter } from "next/router";

import {
  getAccessToken,
  postUserInfoToGigya,
  getUserInfoFromLesp,
} from "./utils";

function OtpInput() {
  const { data } = useFormContext();
  const router = useRouter();
  const inputRefs = [];
  const [values, setValues] = useState(Array(6).fill(""));

  const handleInputChange = (index, value) => {
    if (/^[0-9]*$/.test(value)) {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);

      if (value && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      } else if (!value && index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && !values[index]) {
      const newValues = [...values];
      newValues[index - 1] = "";
      setValues(newValues);
      inputRefs[index - 1].current.focus();
    }
  };

  const handleOtpSubmit = async () => {
    try {
      await verifyUser(data.email, values.join(""));
      const token = await getAccessToken(data.email, data.password);
      const userInfoToGigya = await postUserInfoToGigya(data, token);
      const getUserInfoFromLesp = getUserInfoFromLesp(token);
      console.log(userInfoToGigya, getUserInfoFromLesp);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const firstEmptyIndex = values.findIndex((value) => value === "");
    if (firstEmptyIndex !== -1) {
      inputRefs[firstEmptyIndex].current.focus();
    }
  }, [values]);

  for (let i = 0; i < 6; i++) {
    const ref = {}
    inputRefs.push(ref);
  }

  return (
    <div>
      <div className="custom-modal flex justify-center items-center">
        <div className="modal-content">
          <div className="text-center text-3xl font-semibold">Verification</div>
          <div className="flex flex-col items-center mt-8">
            <h1 className="text-lg font-bold mt-8 mb-4">Enter Code</h1>
            <div className="flex space-x-2 mt-6 sm:mt-12 mb-4">
              {inputRefs.map((ref, index) => (
                <input
                  key={index}
                  ref={ref}
                  className="custom-input"
                  type="text"
                  maxLength="1"
                  value={values[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              ))}
            </div>
            <p className="text-center">
              We have sent a unique code to your email address, please enter it
              below
            </p>
            <p className="text-primary-green font-semibold mt-4 cursor-pointer">
              I didnt receive the code
            </p>
          </div>
          <button
            onClick={handleOtpSubmit}
            className="bg-primary-green hover:bg-green-700 text-white text-lg font-bold text-center py-3 px-6 rounded-md mt-4 cursor-pointer transition duration-300 ease-in-out"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default OtpInput;
