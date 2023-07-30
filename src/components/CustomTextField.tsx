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
  const disabledInputStyle = props.disabled
    ? "bg-gray-600 placeholder:text-neutral-200 cursor-not-allowed"
    : "placeholder:text-neutral-500";

  return (
    <div className="mb-4 w-full">
      <label
        htmlFor={label}
        className="block text-white mb-2 capitalize text-sm"
      >
        {label}
      </label>

      <input
        className={`border border-white bg-transparent rounded-xl py-2.5 px-6 w-full font-light text-sm ${disabledInputStyle}`}
        type="text"
        placeholder={label ? label : props.placeholder}
        {...props}
      />

      {error && touched ? (
        <p className="text-xs text-red-500 ml-2 mt-1">{error}</p>
      ) : null}
    </div>
  );
};

export default CustomTextField;
