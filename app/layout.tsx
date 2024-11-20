import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { ReduxProvider } from "./ReduxProvider";
import "./globals.css";

// const geistSans = Geist({
//   subsets: ["latin"],
// });
// const geistMono = Geist_Mono({
//   subsets: ["latin"],
// });

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased`}>
        <ReduxProvider>
          <Toaster />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
