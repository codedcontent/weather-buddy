import HowItWorksCard from "@/components/HowItWorksCard";
import Image from "next/image";

const weatherBuddySteps = [
  {
    title: "Sign Up for Free",
    description: "Click here to set up your Weather Buddy account.",
  },
  {
    title: "Set your Preferences",
    description: "Select the locations you wish to track its weather.",
  },
  {
    title: "Receive Alerts and Recommendations",
    description:
      "Get real-time alerts and personalized recommendations tailored to you.",
  },
];

const HowItWorks = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center w-full lg:gap-20 gap-5">
      <div className="text-center">
        <h1 className="lg:text-4xl text-2xl font-bold text-wb-primary">
          How It Works
        </h1>
        <p className="lg:text-sm text-xs">In just 3 easy steps</p>
      </div>

      <div className="w-full flex lg:flex-row flex-col justify-between items-center lg:gap-10 gap-0">
        <div className="grid grid-cols-1 lg:w-1/2 w-full lg:gap-4 gap-2">
          {weatherBuddySteps.map((step, index) => (
            <HowItWorksCard
              key={index}
              stepInfo={{ ...step, index: index + 1 }}
            />
          ))}
        </div>

        <div className="lg:w-1/2 w-full">
          <Image
            src="/Profile Interface-rafiki 1.svg"
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

export default HowItWorks;
