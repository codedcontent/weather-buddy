import Features from "./Features";
import Header from "./Header";
import HomePage from "./HomePage";
import HowItWorks from "./HowItWorks";
import UseCase from "./UseCase";

const LandingPage = () => {
  return (
    <div className="h-full w-full">
      <Header />

      <HomePage />

      <Features />

      <UseCase />

      <HowItWorks />
    </div>
  );
};

export default LandingPage;
