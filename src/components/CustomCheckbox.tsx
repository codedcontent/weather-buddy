import React from "react";

type CustomCheckboxProps = {
  label: string;
};

const CustomCheckbox: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & CustomCheckboxProps
> = ({ label, ...props }) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 accent-wb-secondary"
        {...props}
      />

      <span className="ml-2 text-sm">{label}</span>
    </label>
  );
};

export default CustomCheckbox;
