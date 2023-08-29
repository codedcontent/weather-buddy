import Features from "./Features";
import Header from "./Header";
import HomePage from "./HomePage";

const LandingPage = () => {
  return (
    <div className="h-full w-full">
      <Header />

      <HomePage />

      <Features />
    </div>
  );
};

export default LandingPage;
