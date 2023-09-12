import { FormProvider } from "@/context/FormContext";
import CreatePassword from "./createPassword";

function App() {
  return (
    <FormProvider>
      <div className="flex flex-col md:mb-10 md:mt-12 w-full px-4 md:w-[600px] md:mx-auto">
        <h1 className="font-bold text-5xl text-primary-green text-center mb-10">
          Reset password ?
        </h1>
        <p className="text-xl">
          Enter the unique code we sent you below then choose your new
          password.Didnt receive a code? Try resending the code, remember to
          check your spam folder
        </p>
        <CreatePassword></CreatePassword>
      </div>
    </FormProvider>
  );
}

export default App;
