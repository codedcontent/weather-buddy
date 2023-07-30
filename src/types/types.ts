export type CustomTextFieldProps = {
  error: string | undefined;
  label: string;
  touched: boolean | undefined;
};

export type CustomButtonProps = {
  fullWidth?: boolean;
  variant: "filled" | "outlined";
  onClick?: () => void;
  label: string;
  loading?: boolean;
};

export type LoginFormProps = {
  email: string;
  password: string;
};

export type RegisterFormProps = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};
