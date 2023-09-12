import useFormContext from "@/Hooks/useFormContext";
import { useForm } from "react-hook-form";
import Error from "@/Commons/Errors";
import Link from "next/link";

const Login = () => {
  const { data, handleChange } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log(data.email, data.password);
  };

  const content = (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-col mt-4">
      {/* <Breadcrumbs crumbs={crumbs} /> */}
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
      <div className="mb-4 flex flex-col">
        <label htmlFor="password" className="font-bold mb-2">
          Password
        </label>
        <input
          placeholder="Enter your Password"
          className={`py-3 px-6 rounded-lg ${
            errors.password ? "border-2 border-red" : ""
          }`}
          type="password"
          id="password"
          name="password"
          value={data.password}
          {...register("password", {
            required: "Please provide a password",
            onChange: (e) => handleChange(e),
          })}
        />
        {errors.password && <Error message={errors.password.message}></Error>}
      </div>
      <button
        className="bg-primary-green cursor-pointer w-full mt-6 text-lg text-white font-bold py-3 px-6 rounded-lg"
        type="submit"
      >
        Login
      </button>
      <Link href="/forgot-password" className="font-bold text-primary-green">
        <button
          className="bg-white cursor-pointer w-full mt-6 text-lg text-primary-green font-bold py-3 px-6 rounded-lg"
          type="submit"
        >
          Forgot Password
        </button>
      </Link>
      <Link href="/sign-up" className="font-bold text-primary-green">
        <button
          className="bg-white cursor-pointer w-full mt-6 text-lg border border-primary-green text-primary-green font-bold py-3 px-6 rounded-2xl"
          type="submit"
        >
          <p className="font-bold text-xl">CREATE AN ACCOUNT</p>
          <p className="font-light">and claim your $2 coupon</p>
        </button>
      </Link>
    </form>
  );
  return content;
};
export default Login;
