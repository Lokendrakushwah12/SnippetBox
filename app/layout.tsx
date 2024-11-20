import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { ReduxProvider } from "./ReduxProvider";
import "./globals.css";

export const geistSans = Geist({
  subsets: ["latin"],
  preload: false,
});
export const geistMono = Geist_Mono({
  subsets: ["latin"],
  preload: false,
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
        className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
        <ReduxProvider>
          <Toaster />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

export const geist_Sans = Geist();
export const geist_Mono = Geist_Mono();
