import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import { ReduxProvider } from "./ReduxProvider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Snippet Box",
  description: "A place to store and share code snippets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <Toaster />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
