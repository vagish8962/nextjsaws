import { useState } from "react";

function useFormValidation() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    promoCode: "",
  });
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [emailTouched, setEmailTouched] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleConfirmPasswordBlur = () => {
    if (confirmPasswordTouched) {
      setPasswordMatchError(formData.password !== formData.confirmPassword);
    }
  };

  const handlePasswordChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      password: e.target.value,
    }));

    if (confirmPasswordTouched) {
      setPasswordMatchError(e.target.value !== formData.confirmPassword);
    }
  };

  const handleConfirmPasswordFocus = () => {
    setConfirmPasswordTouched(true);
  };

  const handleEmailBlur = () => {
    setEmailValid(/^\S+@\S+\.\S+$/.test(formData.email));
    setEmailTouched(true);
  };

  const validateForm = () => {
    return !passwordMatchError && emailValid;
  };

  return {
    formData,
    passwordMatchError,
    confirmPasswordTouched,
    emailValid,
    emailTouched,
    handleChange,
    handleConfirmPasswordBlur,
    handlePasswordChange,
    handleConfirmPasswordFocus,
    handleEmailBlur,
    validateForm,
  };
}

export default useFormValidation;
