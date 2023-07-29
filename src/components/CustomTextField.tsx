import { CustomTextFieldProps } from "@/types/types";
import React from "react";

const CustomTextField = (props: CustomTextFieldProps) => {
  return (
    <div className="mb-4 w-full">
      <label
        htmlFor={props.label}
        className="block text-white mb-2 capitalize text-sm"
      >
        {props.label}
      </label>

      <input
        className="border border-white bg-transparent rounded-xl py-2.5 px-6 w-full font-light placeholder:text-neutral-500 text-sm"
        type="text"
        placeholder={props.label}
        // {...props.fieldProps}
        disabled={props.disabled}
      />

      {props.error && props.touched ? (
        <p className="text-xs text-red-500 ml-2">{props.error}</p>
      ) : null}
    </div>
  );
};

export default CustomTextField;
