import type { Metadata } from "next";
import MainHeader from "./header";
import "./globals.css";

export const metadata: Metadata = {
  title: "BookTime",
  description: "Web Tracker App",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex items-center h-screen">
        <div className="w-3/4 h-[95%] bg-white/85 rounded-[20px] ml-5">
          <MainHeader></MainHeader>
          <main className="flex-1">{/* Основний контент */}</main>
        </div>

        <div className="w-1/4 h-[95%] bg-white/85 rounded-[20px] ml-5"></div>

        {children}
      </body>
    </html>
  );
}
