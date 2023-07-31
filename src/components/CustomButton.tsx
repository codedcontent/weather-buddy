import { CustomButtonProps } from "@/types/types";
import React from "react";
import Loader from "@/components/Loader";

const CustomButton = ({
  fullWidth = true,
  variant,
  onClick,
  label,
  loading,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & CustomButtonProps) => {
  const buttonStyles = `px-6 py-3 rounded-3xl font-medium text-white flex justify-center items-center gap-x-2 ${
    fullWidth ? "w-full" : "w-auto"
  } ${
    variant === "filled"
      ? "bg-wb-primary transition-all duration-500 border border-wb-primary hover:bg-transparent disabled:bg-gray-500"
      : "bg-transparent hover:border border-primary disabled:bg-gray-500"
  }`;
  return (
    <button
      className={buttonStyles}
      onClick={onClick}
      {...rest}
      disabled={loading || rest.disabled}
    >
      {loading ? <Loader variant="action" /> : label}
    </button>
  );
};

export default CustomButton;
