import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const font = localFont({
  src: "../../fonts/Mona-Sans.woff",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page Description",
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
