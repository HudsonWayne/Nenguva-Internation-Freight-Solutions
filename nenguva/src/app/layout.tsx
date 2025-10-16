import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react"; // ✅ Import NextAuth session provider

export const metadata: Metadata = {
  title: "Nenguva | Parcel Delivery",
  description: "Send and track parcels easily with Nenguva courier services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        {/* ✅ Provide NextAuth session to the whole app */}
        <SessionProvider>
          {/* ✅ Navbar appears only once here */}
          <Navbar />

          {/* ✅ Page content */}
          <main className="flex-grow">{children}</main>

          {/* ✅ Footer appears only once here */}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
