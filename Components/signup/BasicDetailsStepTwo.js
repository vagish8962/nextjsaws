import useFormContext from "@/Hooks/useFormContext";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Error from "@/Commons/Errors";

const BasicDetailsStepTwo = (props) => {
  const { data, handleChange } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(data);

  const onSubmit = () => {
    props.onRegister();
  };
  const content = (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-col mt-4">
      <div className="mb-4 flex flex-col">
        <label htmlFor="First Name" className="font-bold mb-2">
          First name
        </label>
        <input
          placeholder="Enter First name"
          className={`py-3 px-6 rounded-lg ${
            errors.firstName ? "border-2 border-red" : ""
          }`}
          type="text"
          id="firstname"
          name="firstName"
          value={data.firstName}
          {...register("firstName", {
            required: "Please provide a first Name",
            onChange: (e) => handleChange(e),
          })}
        />
        {errors.firstName && <Error message={errors.firstName.message}></Error>}
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="Last Name" className="font-bold mb-2">
          Last name
        </label>
        <input
          placeholder="Enter last name"
          className={`py-3 px-6 rounded-lg ${
            errors.lastName ? "border-2 border-red" : ""
          }`}
          type="text"
          id="last-name"
          name="lastName"
          value={data.lastName}
          {...register("lastName", {
            required: "Please provide a last Name",
            onChange: (e) => handleChange(e),
          })}
        />
        {errors.lastName && <Error message={errors.lastName.message}></Error>}
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="Postal Code" className="font-bold mb-2">
          Postal Code
        </label>
        <input
          placeholder="Confirm Enter postal code"
          className={`py-3 px-6 rounded-lg ${
            errors.postalCode ? "border-2 border-red" : ""
          }`}
          type="text"
          id="postal-code"
          name="postalCode"
          value={data.postalCode}
          {...register("postalCode", {
            required: "Please provide a Postal code",
            onChange: (e) => handleChange(e),
          })}
        />
        {errors.postalCode && (
          <Error message={errors.postalCode.message}></Error>
        )}
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="Date of birth" className="font-bold mb-2">
          Date of Birth
        </label>
        <input
          className={`py-3 px-6 rounded-lg ${
            errors.dateOfBirth ? "border-2 border-red" : ""
          }`}
          type="date"
          id="date-of-birth"
          name="dateOfBirth"
          value={data.dateOfBirth}
          {...register("dateOfBirth", {
            required: "Please provide a Date of Birth",
            onChange: (e) => handleChange(e),
          })}
        />
        {errors.dateOfBirth && (
          <Error message={errors.dateOfBirth.message}></Error>
        )}
      </div>
      <div
        className={`flex flex-col mt-4 p-2 bg-white rounded-xl ${
          errors.agreeToTerms ? "border-2 border-red" : ""
        }`}
      >
        <label className="flex items-center">
          <input
            className="mr-2 border-2 border-primary-green rounded-md w-5 h-5"
            type="checkbox"
            name="agreeToTerms"
            {...register("agreeToTerms", {
              required: "Please Accept terms and conditions",
            })}
          />
          <span>
            I agree to the
            <Link className="text-primary-green font-bold underline" href="#">
              Terms & Conditions
            </Link>
          </span>
        </label>
        <p className="text-sm">
          *This app is intended for residents of Canada over The age of 16,
          excluding the province of Quebec.
        </p>
      </div>
      <div className="flex flex-col mt-4 p-2 bg-white rounded-xl">
        <label className="flex items-center">
          <input
            className="mr-2  border-2 border-primary-green rounded-md w-5 h-5"
            type="checkbox"
            name="receiveUpdates"
          />
          <span className="ml-2 w-[90%] bg-white rounded-xl p-2">
            I want to be among the first to learn about exciting offers, product
            updates and more from Leap Rewards and other{" "}
            <Link className="text-primary-green font-bold underline" href="#">
              Unilever brands.
            </Link>
          </span>
        </label>
        <p className="text-sm">
          By electronic messages. Occasionally, this may include co-promotions
          with carefully selected partners. For further information, please
          refer to our{" "}
          <Link className="text-primary-green font-bold" href="#">
            Privacy Notice, you can unsubscribe at any time or update your email
            preference here.
          </Link>
          Your consent is sought by Unilever Canada Inc., <br></br>
          privacy.canada@unilever.com | 1-888-568-7644 | Unilever Consumer
          Services Contact Centre, P.O. Box 38, Saint John, New Brunswick, E2L
          #X1, Canada.
        </p>
      </div>
      <button
        className="bg-primary-green cursor-pointer w-full mt-6 text-lg text-white font-bold py-3 px-6 rounded-lg"
        type="submit"
      >
        Register
      </button>
      {/* <Modal showModal={showModal} /> */}
    </form>
  );
  return content;
};
export default BasicDetailsStepTwo;
