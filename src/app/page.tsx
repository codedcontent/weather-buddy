import Footer from "@/pages/landingPage/Footer";
import LandingPage from "@/pages/landingPage/LandingPage";

export default function Home() {
  return (
    <main className="w-screen">
      <div className="w-screen max-w-5xl px-10 mx-auto">
        <LandingPage />
      </div>

      <Footer />
    </main>
  );
}
