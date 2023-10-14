import Features from "./Features";
import HomePage from "./HomePage";
import HowItWorks from "./HowItWorks";
import SubscriptionPlans from "./SubscriptionPlans";
import UseCase from "./UseCase";

const LandingPage = () => {
  return (
    <div className="h-full w-full">
      <HomePage />

      <Features />

      <UseCase />

      <HowItWorks />

      <SubscriptionPlans />
    </div>
  );
};

export default LandingPage;
