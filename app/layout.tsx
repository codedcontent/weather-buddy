import "./globals.css";

export const metadata = {
  title: "Weather Buddy",
  description: "The most top-tear weather assistant out there.",
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
