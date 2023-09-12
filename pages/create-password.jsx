import React from "react";
import CreatePassword from "@/Components/createPassword"

function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between bg-hard-green">
      <CreatePassword></CreatePassword>
    </div>
  );
}

export default ForgotPasswordPage;
