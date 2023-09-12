import BasicDetailsStepOne from "./BasicDetailsStepOne";
import BasicDetailsStepTwo from "./BasicDetailsStepTwo";
import useFormContext from "@/Hooks/useFormContext";

const FormInputs = (props) => {
  const { page } = useFormContext();
  const display = {
    0: <BasicDetailsStepOne handleNext={props.handleNext} />,
    1: (
      <BasicDetailsStepTwo
        showModal={props.showModal}
        onRegister={props.onRegister}
      />
    ),
  };
  const content = <div className="form-inputs flex-col">{display[page]}</div>;

  return content;
};

export default FormInputs;
