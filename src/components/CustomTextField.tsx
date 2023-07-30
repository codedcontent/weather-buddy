import { CustomTextFieldProps } from "@/types/types";
import React from "react";

const CustomTextField = ({
  error,
  label,
  touched,
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  CustomTextFieldProps) => {
  return (
    <div className="mb-4 w-full">
      <label
        htmlFor={label}
        className="block text-white mb-2 capitalize text-sm"
      >
        {label}
      </label>

      <input
        className="border border-white bg-transparent rounded-xl py-2.5 px-6 w-full font-light placeholder:text-neutral-500 text-sm"
        type="text"
        {...props}
      />

      {error && touched ? (
        <p className="text-xs text-red-500 ml-2 mt-1">{error}</p>
      ) : null}
    </div>
  );
};

export default CustomTextField;
