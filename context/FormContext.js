import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const title = {
    0: "Step 1",
    1: "Step 2",
  };
  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    email: "",
    password: "",
    repassword: "",
    promocode: "",
    firstName: "",
    lastName: "",
    postalCode: "",
    dateOfBirth: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHide = page !== Object.keys(title).length - 1 && "remove-button";
  return (
    <FormContext.Provider
      value={{ title, page, setPage, data, setData, handleChange }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
