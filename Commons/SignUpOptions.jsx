import React from "react";


function SignUpOptions({ provider }) {
  let icon;

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
