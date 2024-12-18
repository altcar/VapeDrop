import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./component/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./component/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "VapeDrop Rewards",
  description: "Rewards for VapeDrop users",
};
import { AuthProvider } from '@/app/component/login';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full max-w-[500px] mx-auto h-full overflow-x-hidden`}

      >
         {/* overflow-hidden */}
         <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
