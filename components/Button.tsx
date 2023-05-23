import React from "react";

interface Props {
  width?: string;
  filled?: boolean;
  onClick?: () => void;
  title: string;
}

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & Props
> = ({ width = "auto", filled = true, onClick, title, ...rest }) => {
  const buttonStyles = `px-6 py-3 rounded-3xl font-medium text-white ${
    width === "full" ? "w-full" : "w-auto"
  } ${
    filled
      ? "bg-primary transition-all duration-500 border border-primary hover:bg-transparent"
      : "bg-transparent hover:border border-primary"
  }`;

  return (
    <button className={buttonStyles} onClick={onClick} {...rest}>
      {title}
    </button>
  );
};

export default Button;
