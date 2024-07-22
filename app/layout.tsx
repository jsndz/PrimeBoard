import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["800"] });
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
      <body className={`${inter.className} ${poppins.className}`}>
        <div className="overlay"></div>
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
