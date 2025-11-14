import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
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
    <html lang="en" suppressHydrationWarning className={sora.variable}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
