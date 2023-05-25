import { string, object } from "yup";

const nameMaxChars = 15;

const createAccountSchema = object({
  firstName: string()
    .required("First name is required")
    .max(nameMaxChars, `Must be ${nameMaxChars} characters or less`),
  lastName: string()
    .required("Last name is required")
    .max(nameMaxChars, `Must be ${nameMaxChars} characters or less`),
  email: string().required("Email is required").email("Invalid email"),
  phoneNumber: string()
    .required("Phone number is required")
    .max(20, "Invalid phone number")
    .min(10, "Invalid phone number"),
  password: string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one numeric digit"
    ),
  confirmPassword: string()
    .required("Confirm Password is required")
    .test("password-match", "Passwords do not match", function (value) {
      return value === this.parent.password;
    }),
});

export default createAccountSchema;
