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
    <div
      className="flex flex-col h-screen justify-center items-center w-full gap-20"
      //   style={{ minHeight: "calc(100vh - 96px)" }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-wb-primary">
          Weather Buddy Features
        </h1>
        <p className="text-sm">
          Discover the Extraordinary Features of Weather Buddy
        </p>
      </div>

      <div className="w-full flex justify-between items-center gap-10">
        <div className="grid grid-cols-1 w-1/2 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        <div className="w-1/2">
          <Image
            src="/Team work-bro 1.svg"
            width={500}
            height={500}
            className="w-full"
            alt="Weather Buddy Alerts"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
