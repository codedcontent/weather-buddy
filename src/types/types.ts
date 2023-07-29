export type CustomTextFieldProps = {
  //   TODO: FIX THIS - NOT ALL ARE REQUIRED
  error?: string | undefined;
  label?: string;
  placeholder?: string;
  touched?: boolean | undefined;
  disabled?: boolean;
  //   fieldProps: FieldInputProps<any>;
};

export type CustomButtonProps = {
  fullWidth?: boolean;
  variant: "filled" | "outlined";
  onClick?: () => void;
  label: string;
  loading?: boolean;
};
