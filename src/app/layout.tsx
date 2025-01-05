import "./globals.css";
import { Inter } from "next/font/google";
import { SessionProviderWrapper } from "@/components/SessionProviderWrapper"; // Import the wrapper
import { Toaster } from "react-hot-toast";
import Appbar from "@/components/Appbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Governance",
  description: "Description of your app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderWrapper>
          {children}
        </SessionProviderWrapper>

        <Toaster />
      </body>
    </html>
  );
}
