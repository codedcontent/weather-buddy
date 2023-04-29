import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <main className={`${poppins.variable} font-sans`}>
      <p className="text-5xl">Hey Boy</p>
    </main>
  );
}
