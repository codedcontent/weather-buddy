import LandingPage from "@/pages/landingPage/LandingPage";
import Footer from "@/pages/landingPage/Footer";

export default function Home() {
  return (
    <main className="w-screen relative">
      <div className="w-screen max-w-6xl px-10 mx-auto">
        <LandingPage />
      </div>

      <Footer />
    </main>
  );
}
