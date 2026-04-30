import type { ReactNode } from "react";
import type { Metadata } from "next";

import "../src/index.css";
import "../src/components/ProfileCard.css";
import "../src/components/CurvedLoop.css";

export const metadata: Metadata = {
  title: "DesignX Skool | Cohort starts Mar 20, 2026 • Limited seats • No design background required",
  description: "Learn by building real products with mentors from top studios. Graduate with a standout portfolio, interview prep, and referrals.",
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
