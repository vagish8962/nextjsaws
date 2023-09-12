import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

function SignUpOptions({ provider }) {
  let icon;
  if (provider === "Google")
    icon = <FcGoogle className="self-center" size={20}></FcGoogle>;
  else icon = <AiFillApple className="self-center" size={20} />;
  return (
    <div className="w-full md:w-[45%] p-2 flex justify-evenly md:justify-evenly border-2 border-primary-green rounded-lg bg-white opacity-70 mt-4 md:mt-0">
      <div className="flex items-center">
        {icon}
        <p className="self-center font-bold text-black ml-2">{`Sign up with ${provider}`}</p>
      </div>
    </div>
  );
}

export default SignUpOptions;
