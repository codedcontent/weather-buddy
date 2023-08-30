import FeatureCard from "@/components/FeatureCard";
import Image from "next/image";

const features = [
  {
    name: "Real-Time Alerts",
    description:
      "Receive instant weather alerts for your location, keeping you prepared for any sudden changes.",
  },
  {
    name: "Personalized Recommendations",
    description:
      "Get customized recommendations based on your preferences and activities, ensuring you make the most of the weather.",
  },
  {
    name: "Integration with Calendar Apps",
    description:
      "Sync your weather alerts with your calendar to seamlessly plan your schedule around changing conditions.",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center w-full lg:gap-20 gap-5">
      <div className="text-center">
        <h1 className="lg:text-4xl text-2xl font-bold text-wb-primary">
          Weather Buddy Features
        </h1>
        <p className="lg:text-sm text-xs">
          Discover the Extraordinary Features of Weather Buddy
        </p>
      </div>

      <div className="w-full flex lg:flex-row flex-col justify-between items-center lg:gap-10 gap-0">
        <div className="lg:w-1/2 w-full">
          <Image
            src="/Team work-bro 1.svg"
            width={500}
            height={500}
            className="w-full"
            alt="Weather Buddy Alerts"
          />
        </div>

        <div className="grid grid-cols-1 lg:w-1/2 w-full lg:gap-4 gap-2">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
