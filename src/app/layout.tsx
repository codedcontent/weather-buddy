import AuthProvider from "@/context/AuthProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import UserProvider from "@/context/UserProvider";
import ReduxReducer from "@/context/ReduxProvider";
import Snackbar from "@/context/Snackbar";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Home | Weather Buddy",
  description:
    "Welcome to Weather Buddy - Your Ultimate Weather Alerting and Recommendation App. Stay ahead of the elements with real-time weather alerts tailored to your location. From rainstorms to sunny days, Weather Buddy keeps you informed and safe. Get personalized weather recommendations that guide your plans, whether it's a weekend getaway or daily commute. Experience weather confidence like never before with Weather Buddy!",
};

// export const metadata: Metadata = {
//   title: "Weather Buddy",
//   description:
//     "Stay ahead with Weather Buddy - your weather alerting service! Real-time updates & personalized alerts for storms, heatwaves, & freezing temps.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReduxReducer>
        <AuthProvider>
          <UserProvider>
            <Snackbar>
              <body className={`${inter.className} h-screen w-screen`}>
                {children}
              </body>
            </Snackbar>
          </UserProvider>
        </AuthProvider>
      </ReduxReducer>
    </html>
  );
}
