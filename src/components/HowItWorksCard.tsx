import React from "react";

type Props = {
  stepInfo: {
    title: string;
    description: string;
    index: number;
  };
};

const HowItWorksCard = ({ stepInfo }: Props) => {
  const { title, description, index } = stepInfo;

  return (
    <div className="w-full lg:p-4 p-2 flex justify-center items-center gap-4">
      <div
        className={`rounded-xl p-2 lg:w-14 w-12 shadow-md ${
          index === 1 ? "bg-wb-primary" : "bg-[#F2F1F1]"
        }`}
      >
        <p
          className={`lg:text-2xl text-lg text-center ${
            index === 1 ? "text-white" : "text-wb-primary"
          }`}
        >
          {index}
        </p>
      </div>

      <div className="w-full">
        <p className="font-bold lg:text-base text-sm">{title}</p>
        <p className="lg:text-base text-sm">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
