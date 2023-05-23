// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues

const signUpFormValidate = (values: {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}) => {
  const errors: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
  } = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  // First name validation
  if (!values.firstName) {
    errors.firstName = "First name is required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  // Last name validation
  if (!values.lastName) {
    errors.lastName = "Last name is required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  // Email validation
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // Phone number validation
  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone number is required";
  } else if (values.phoneNumber.length < 10 || values.phoneNumber.length > 15) {
    errors.phoneNumber = "Phone number is invalid";
  }

  // Password validation
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length > 6) {
    errors.password = "Must be more than 6 characters";
  }

  // Confirm password validation
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm your password";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password is not the same";
  }

  return errors;
};

export default signUpFormValidate;
