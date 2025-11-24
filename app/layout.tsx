import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Portfolio website for jlee",
  description: "A portfolio website of a computer science student, highlighting projects and providing contact information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
