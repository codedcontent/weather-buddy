import LandingPage from "@/pages/landingPage/LandingPage";
import Footer from "@/pages/landingPage/Footer";
import Header from "@/pages/landingPage/Header";

export default function Home() {
  return (
    <main className="w-screen relative">
      <div className="z-50 w-full max-w-6xl m-auto sticky top-0 left-0">
        <Header />
      </div>

      <div className="w-screen max-w-6xl px-10 mx-auto">
        <LandingPage />
      </div>

      <Footer />
    </main>
  );
}
