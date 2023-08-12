import AuthProvider from "@/context/AuthProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import UserProvider from "@/context/UserProvider";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Weather Buddy",
  description:
    "Stay ahead with Weather Buddy - your weather alerting service! Real-time updates & personalized alerts for storms, heatwaves, & freezing temps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <UserProvider>
          <body className={`${inter.className} h-screen w-screen`}>
            {children}
          </body>
        </UserProvider>
      </AuthProvider>
    </html>
  );
}
