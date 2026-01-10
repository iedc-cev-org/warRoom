import localFont from "next/font/local";

export const nebula = localFont({
  src: [
    {
      path: "./fonts/Nebula-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nebula",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const nebulaHollow = localFont({
  src: [
    {
      path: "./fonts/Nebula-Hollow.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nebula-hollow",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
