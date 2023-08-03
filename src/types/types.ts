import { type } from "os";

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

export type AccountDetailFormProps = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type WeatherAlertsProps = {
  id: number | string;
  location: string;
  times: string[];
}[];

export type WeatherAlertTimes = "5:00AM" | "12:00AM" | "4:00PM" | "8:00PM";
