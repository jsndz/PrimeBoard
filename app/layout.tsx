import type { Metadata } from "next";
import "./globals.css";
import { SalesProvider } from "../context/SalesContext";
export const metadata: Metadata = {
  title: "PrimeBoard",
  description: "A leaderboard for Prime Products of 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SalesProvider>
          <div className="overlay"></div>
          <div className="content">{children}</div>
        </SalesProvider>
      </body>
    </html>
  );
}
