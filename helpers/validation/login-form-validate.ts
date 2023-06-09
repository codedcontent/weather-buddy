import { string, object } from "yup";

const loginSchema = object({
  email: string().required("Email is required").email("Invalid email"),
  password: string().required("Password is required"),
});

export default loginSchema;
