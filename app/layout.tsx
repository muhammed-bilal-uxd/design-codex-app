import type { ReactNode } from "react";
import type { Metadata } from "next";

import "../src/index.css";
import "../src/components/ProfileCard.css";
import "../src/components/CurvedLoop.css";

export const metadata: Metadata = {
  title: "DesignX Skool",
  description: "DesignX Skool landing site built with the Next.js app router.",
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
