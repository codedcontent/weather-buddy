import React from "react";

type Props = {
  useCase: {
    name: string;
    description: string;
  };
};

const UseCaseCard = ({ useCase }: Props) => {
  const { name, description } = useCase;

  return (
    <div className="text-white p-5 lg:space-y-3 space-y-1 bg-wb-primary rounded-xl">
      <p className="font-bold lg:text-xl text-base">{name}</p>

      <p className="font-extralight lg:text-base text-sm">
        <span className="font-black text-wb-secondary">Use Case </span>:{" "}
        {description}
      </p>
    </div>
  );
};

export default UseCaseCard;
