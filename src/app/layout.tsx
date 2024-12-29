// app/layout.tsx
import "./globals.css"; // Ensure this imports your global CSS styles
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

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
        {children}
        <Toaster /> {/* Add the Toaster here */}
      </body>
    </html>
  );
}
