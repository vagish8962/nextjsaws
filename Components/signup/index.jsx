import Form from "./Form";
import {FormProvider} from "@/context/FormContext"

function App() {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  );
}
export default App;
