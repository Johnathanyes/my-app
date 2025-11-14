import localFont from "next/font/local";

export const sora = localFont({
  src: [
    { path: "public\fontsSora-Thin.woff2", weight: "100", style: "normal" },
    {
      path: "public\fontsSora-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    { path: "public\fontsSora-Light.woff2", weight: "300", style: "normal" },
    { path: "public\fontsSora-Regular.woff2", weight: "400", style: "normal" },
    { path: "public\fonts-Medium.woff2", weight: "500", style: "normal" },
    { path: "public\fontsSora-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "public\fontsSora-Bold.woff2", weight: "700", style: "normal" },
    {
      path: "public\fontsSora-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-sora"
});
