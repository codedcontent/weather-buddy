import UseCaseCard from "@/components/UseCaseCard";
import Image from "next/image";

const useCases = [
  {
    name: "Plan Outdoor Activities with Confidence",
    description:
      "Whether it's a picnic, a hike, or a sporting event, our platform helps you plan outdoor activities with accurate weather insights.",
  },
  {
    name: "Safe Commuting",
    description:
      "Navigating your daily commute can be challenging. Receive real-time alerts about traffic disruptions and weather conditions to ensure a safe and hassle-free journey.",
  },
  {
    name: "Seamless Event Management",
    description:
      "Organizing an outdoor event? Our accurate weather alerts help you stay prepared for any weather changes, ensuring a successful and stress-free event.",
  },
];

const UseCase = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center w-full lg:gap-20 gap-5">
      <div className="text-center">
        <h1 className="lg:text-4xl text-2xl font-bold text-wb-primary">
          Benefits and Use Cases
        </h1>
        <p className="lg:text-sm text-xs">
          Unlock Limitless Possibilities with Weather Buddy
        </p>
      </div>

      <div className="w-full flex lg:flex-row flex-col-reverse justify-between items-center lg:gap-10 gap-0">
        <div className="lg:w-1/2 w-full">
          <Image
            src="/Nature benefits-rafiki 1.svg"
            width={500}
            height={500}
            className="w-full"
            alt="Weather Buddy Alerts"
          />
        </div>

        <div className="grid grid-cols-1 lg:w-1/2 w-full lg:gap-4 gap-2">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCase;
