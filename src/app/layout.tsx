import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haus Mitre Station Brooklin | A poucos passos do Metrô Brooklin",
  description:
    "Haus Mitre Station Brooklin | A poucos passos do Metrô Brooklin",
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ marginRight: "0 !important" }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased !m-0 !mr-0`}
      >
        <div className="w-full h-full">{children}</div>
        <Toaster
          richColors
          toastOptions={{
            duration: 5000,
          }}
        />
      </body>
    </html>
  );
}
