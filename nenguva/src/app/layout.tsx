import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
        {/* Navbar at the top */}
        <Navbar />

        {/* Main page content */}
        <main className="flex-grow">{children}</main>

        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
