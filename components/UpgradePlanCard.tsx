import React from "react";

type Props = {};

const UpgradePlanCard: React.FC = (props: Props) => {
  return (
    <div className="w-full p-6 bg-secondary rounded-3xl">
      <p className="uppercase">current plan - FREE</p>
      <p className="font-light text-sm">
        Upgrade you plan today - 20% discount
      </p>
    </div>
  );
};

export default UpgradePlanCard;
