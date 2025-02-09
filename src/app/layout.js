import * as React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import App from "./components/app.js"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Christian Vieux Portfolio",
  description: "Portfolio Overview",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <App />
      </body>
    </html>
  );
}
