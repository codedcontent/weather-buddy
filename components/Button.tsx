import React from "react";
import { Loader2 } from "lucide-react";

interface Props {
  width?: string;
  filled?: boolean;
  onClick?: () => void;
  title: string;
  loading?: boolean;
}

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & Props
> = ({
  width = "auto",
  filled = true,
  onClick,
  title,
  loading = false,
  ...rest
}) => {
  const buttonStyles = `px-6 py-3 rounded-3xl font-medium text-white flex justify-center items-center gap-x-2 ${
    width === "full" ? "w-full" : "w-auto"
  } ${
    filled
      ? "bg-primary transition-all duration-500 border border-primary hover:bg-transparent disabled:bg-gray-500"
      : "bg-transparent hover:border border-primary disabled:bg-gray-500"
  }`;

  return (
    <button
      className={buttonStyles}
      onClick={onClick}
      disabled={loading}
      {...rest}
    >
      {loading && <Loader2 className="animate-spin text-sm" />}
      {title}
    </button>
  );
};

export default Button;
