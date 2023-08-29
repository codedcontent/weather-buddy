import React from "react";

type Props = {
  feature: {
    name: string;
    description: string;
  };
};

const FeatureCard = ({ feature }: Props) => {
  const { name, description } = feature;

  return (
    <div className="text-white p-5 lg:space-y-3 space-y-1 bg-wb-primary rounded-xl">
      <p className="font-bold lg:text-xl text-base">{name}</p>

      <p className="font-extralight lg:text-base text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
