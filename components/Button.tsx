import React from "react";

type Props = {
  width?: string;
  filled?: boolean;
  onClick: () => void;
  title: string;
};

const Button: React.FC<Props> = ({
  width = "auto",
  filled = true,
  onClick,
  title,
}) => {
  const buttonStyles = `px-20 py-3 rounded-3xl font-medium text-white ${
    width === "full" ? "w-full" : "w-auto"
  } ${
    filled
      ? "bg-primary transition-all duration-500 border border-primary hover:bg-transparent"
      : "bg-transparent hover:scale-105"
  }`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
