import * as yup from "yup";

const accountDetailsSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Provide a valid email address"
    )
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .min(10, "Phone number can't be less than 10 characters")
    .max(15, "Phone number can't be more than 15 characters")
    .required("Phone number is required"),
});

export default accountDetailsSchema;
