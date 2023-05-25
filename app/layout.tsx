import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Weather Buddy",
  description:
    "Weather Buddy is an advanced weather notification service. A good companion to have in your everyday life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-poppins`}>
      <body>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
