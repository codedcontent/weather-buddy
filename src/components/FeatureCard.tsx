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
    <div className="text-white p-5 space-y-3 bg-wb-primary rounded-xl">
      <p className="font-bold text-xl">{name}</p>

      <p className="font-light">{description}</p>
    </div>
  );
};

export default FeatureCard;
