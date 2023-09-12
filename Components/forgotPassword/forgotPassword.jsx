import useFormContext from "@/Hooks/useFormContext";
import { useForm } from "react-hook-form";
import Error from "@/Commons/Errors";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const { data, handleChange } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  console.log(data);

  const onSubmit = () => {
    console.log(data);
    router.push("/create-password");
  };
  
  const content = (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-col mt-4">
      <div className="mb-4 flex flex-col">
        <label htmlFor="email" className="font-bold mb-2">
          Email
        </label>
        <input
          placeholder="Enter email"
          className={`py-3 px-6 rounded-lg ${
            errors.email ? "border-2 border-red" : ""
          }`}
          type="text"
          id="email"
          name="email"
          value={data.email}
          {...register("email", {
            required: "Please provide an email address",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
            onChange: (e) => handleChange(e),
          })}
        />
        {errors.email && <Error message={errors.email.message}></Error>}
      </div>
      <button
        className="bg-primary-green cursor-pointer w-full mt-6 text-lg text-white font-bold py-3 px-6 rounded-lg"
        type="submit"
      >
        Send Code
      </button>
    </form>
  );
  return content;
};
export default ForgotPassword;
