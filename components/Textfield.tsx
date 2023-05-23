"use client";

import React from "react";
import { SignUpFormProps } from "@/types/forms";
import type { FormikTouched } from "formik";

type Props = {
  value: string;
  error: string | undefined;
  label: string;
  handleChange: (e: React.ChangeEvent<SignUpFormProps | any>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  touched: boolean | undefined;
  name: string;
};

const Textfield: React.FC<Props> = ({
  label,
  name,
  value,
  error,
  handleChange,
  handleBlur,
  touched,
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
        placeholder="Form placeholder"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
      />

      {error && touched ? (
        <p className="text-xs text-red-500 ml-2">{error}</p>
      ) : null}
    </div>
  );
};

export default Textfield;
