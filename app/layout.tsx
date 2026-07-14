import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swapnali Bhide | Data Analyst Portfolio",

  description:
    "Data Analyst portfolio showcasing SQL, Power BI, Python analytics projects and business intelligence solutions.",
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
