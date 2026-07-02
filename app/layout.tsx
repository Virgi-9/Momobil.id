import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Momobil.id - Jual Beli Mobil Bekas Terpercaya",
  description:
    "Temukan mobil bekas berkualitas dengan harga terbaik. Momobil.id platform jual beli mobil bekas terpercaya di Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full">
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
