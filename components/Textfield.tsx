"use client";

import React from "react";
import { FieldInputProps } from "formik";

interface Props {
  error: string | undefined;
  label: string;
  touched: boolean | undefined;
  disabled?: boolean;
  fieldProps: FieldInputProps<any>;
}

const Textfield: React.FC<Props> = ({
  label,
  error,
  touched,
  disabled,
  fieldProps,
}) => {
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
        placeholder={label}
        {...fieldProps}
        disabled={disabled}
      />

      {error && touched ? (
        <p className="text-xs text-red-500 ml-2">{error}</p>
      ) : null}
    </div>
  );
};

export default Textfield;
