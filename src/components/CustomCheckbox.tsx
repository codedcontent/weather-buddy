import React from "react";

const CustomCheckbox = ({ label }: { label: string }) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 accent-wb-secondary"
        checked
      />

      <span className="ml-2 text-sm">{label}</span>
    </label>
  );
};

export default CustomCheckbox;
