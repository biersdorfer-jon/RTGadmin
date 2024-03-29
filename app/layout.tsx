import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Modal } from "@/components/ui/modal";
import ModalProvider from "@/providers/modal-provider";
import prismadb from "@/lib/prismadb";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Run To God Dashboard",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider />
        {children}
        </body>
    </html>
  </ClerkProvider>
  );
}
