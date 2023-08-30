import SubPlan from "@/components/SubPlan";
import { TSubscriptionOption } from "@/types/types";
import Image from "next/image";

const subscriptionPlans = [
  {
    name: "free",
    description:
      "You get essentials with our Free Plan, perfect for testing out Weather Buddy features.",
    features: [
      "Track 2 locations",
      "1 weather alert and recommendation daily.",
      "Alert channel → Email",
    ],
    price: 0,
  },
  {
    name: "Standard",
    description:
      "Stay informed and plan your days effectively with our Pro Plan, offering daily weather updates.",
    features: [
      "Track 5 locations",
      "2 weather alerts and recommendations daily.",
      "Alert channel → Email alerts + WhatsApp + SMS",
    ],
    price: 9.99,
  },
  // {
  //   id: 3,
  //   name: "premium plan",
  //   description:
  //     "Experience Weather Buddy at its best with our Premium Plan. Unlock advanced features and deeply personalized recommendations",
  //   features: [
  //     "Advanced weather insights",
  //     "Severe weather alerts",
  //     "Customizable notifications",
  //   ],
  //   badge: {
  //     title: "Coming Soon",
  //     color: "green",
  //   },
  //   price: 5,
  // },
];

// TODO: Make this responsive

const SubscriptionPlans = () => {
  return (
    <div
      className="flex flex-col min-h-screen justify-center items-center w-full lg:gap-20 gap-5 mt-4"
      id="pricing"
    >
      <div className="text-center">
        <h1 className="lg:text-4xl text-2xl font-bold text-wb-primary">
          Pricing
        </h1>
        <p className="lg:text-sm text-xs">
          We have some options for you to pick from
        </p>
      </div>

      <div className="w-full flex lg:flex-row flex-col justify-between items-center lg:gap-10 gap-0">
        <div className="lg:w-1/2 w-full">
          <Image
            src="/Account-rafiki 1.svg"
            width={500}
            height={500}
            className="w-full"
            alt="Weather Buddy Alerts"
          />
        </div>

        <div className="grid grid-cols-1 lg:w-1/2 w-full lg:gap-4 gap-2">
          {subscriptionPlans.map((plan, index) => (
            <SubPlan key={index} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
