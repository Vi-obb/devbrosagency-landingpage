
import "./globals.css";
import type { Metadata } from "next";


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
      <body className=" flex min-h-screen flex-col">
        {children}
      
      </body>
    </html>
  );
}
