"use client";

import { useState } from "react";

type CheckboxProps = {
  label: string;
};

const CustomCheckbox: React.FC<CheckboxProps> = ({ label }) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 accent-secondary"
        checked
      />

      <span className="ml-2 text-sm">{label}</span>
    </label>
  );
};

export default CustomCheckbox;
