import { FormProvider } from "@/context/FormContext";
import ForgotPassword from "./forgotPassword";

function App() {
  return (
    <FormProvider>
      <div className="flex flex-col md:mb-10 md:mt-12 w-full px-4 md:w-[600px] md:mx-auto">
        <h1 className="font-bold text-5xl text-primary-green text-center mb-10">
          Forgot your password ?
        </h1>
        <p className="text-xl">
          Enter the email address you used to create ou account.We will send an
          email with instrucctions on how to reset your password
        </p>
        <ForgotPassword></ForgotPassword>
      </div>
    </FormProvider>
  );
}

export default App;
