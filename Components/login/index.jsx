import { FormProvider } from "@/context/FormContext";
import Login from "./login";

function App() {
  return (
    <FormProvider>
      <div className="flex flex-col md:mb-10 md:mt-12 w-full px-4 md:w-[600px] md:mx-auto">
        <h1 className="font-bold text-5xl text-primary-green text-center">
          Login
        </h1>
        <Login></Login>
      </div>
    </FormProvider>
  );
}

export default App;
