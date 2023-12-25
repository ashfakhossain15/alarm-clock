import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Alarm Clock",
  description: "Generated by Next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
