import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "jur beijaard",
  description: "Personal page of Jur Beijaard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-200">{children}</body>
    </html>
  );
}
