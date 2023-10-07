import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const font = localFont({
  src: "../../fonts/Mona-Sans.woff",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devbros - Web Design & Development Agency",
  description: "We specialize in creating delightful and robust web solutions",
  openGraph: {
    title: "Devbros - Web Design & Development Agency",
    description:
      "We specialize in creating delightful and robust web solutions",
    images: [
      {
        url: "https://elmerlar.sirv.com/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://elmerlar.sirv.com/og.png",
        width: 1800,
        height: 1600,
        alt: "DevBros OG Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} min-h-screen`}>{children}</body>
    </html>
  );
}
