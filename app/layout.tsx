import type { Metadata } from "next";
import MainHeader from "@/components/layout/header/header";
import ProfileSection from "@/components/layout/profile_section/profile_section";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

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
        <TooltipProvider>
          <div className="w-3/4 h-[95%] bg-white/85 rounded-[20px] ml-5 flex flex-col min-w-0">
            <MainHeader />
            <main className="flex-1 overflow-y-auto custom-content-scroll ml-1 mr-1 mt-1 mb-4">
              {children}
            </main>
          </div>
          <div className="w-1/4 h-[95%] bg-white/85 rounded-[20px] ml-5 mr-5">
            <ProfileSection />
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
