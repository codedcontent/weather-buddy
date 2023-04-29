import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
