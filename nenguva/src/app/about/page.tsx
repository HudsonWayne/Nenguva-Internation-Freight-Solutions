"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const router = useRouter();

  // Correct links
  const navLinks1 = [
    { name: "Home", href: "/" },
    { name: "Get a Parcel Delivery Quote", href: "/send-parcels" },
    { name: "About Us", href: "/about" },
    { name: "Help & Support", href: "/contact-us" }, // ✅ goes to contact-us
    { name: "Sign Up", href: "/register" }, // ✅ goes to register
    { name: "Login", href: "/login" }, // ✅ goes to login
    { name: "Parcel Tracking", href: "/tracking" }, // ✅ goes to tracking
  ];

  const navLinks2 = [
    { name: "Contact Us", href: "/contact-us" },
    { name: "Reviews", href: "/reviews" },
    { name: "International Shipping", href: "/international-shipping" },
    { name: "Courier Companies", href: "/courier-companies" },
    { name: "Parcel Delivery Services", href: "/parcel-services" },
    { name: "Marketplace Selling Guides", href: "/marketplace-guides" },
    { name: "Retailer Returns", href: "/retailer-returns" },
  ];

  const countries = [
    "België","Deutschland","España","France","Italia","Nederland",
    "United Kingdom","United States"
  ];

  return (
    <footer className="w-full">
      {/* Top Footer Section */}
      <div className="bg-[#37004b] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col gap-2">
              {navLinks1.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => router.push(link.href)}
                  className="text-left hover:underline leading-relaxed text-sm sm:text-base"
                >
                  {link.name}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {navLinks2.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => router.push(link.href)}
                  className="text-left hover:underline leading-relaxed text-sm sm:text-base"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Divider Line */}
          <div className="hidden md:block border-r border-white/30 h-full mx-auto" />

          {/* Info Block */}
          <div className="flex flex-col gap-4 text-sm sm:text-base w-full md:w-[500px]">
            <p>
              Parcel Monkey allows businesses and individuals to compare quotes
              for cheap courier services for deliveries within the UK, European
              and Worldwide destinations.
            </p>
            <p>
              We use reputable couriers such as DHL, DPD, Parcelforce, DX,
              CitySprint and others to offer a variety of next day, premium,
              economy, door to door, collection and drop-off courier services at
              the cheapest shipping rates.
            </p>
            <p>Rated Great based on 79,000+ customer reviews on TrustPilot.</p>

            {/* Logos Section */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 justify-start">
              <Image src="/logos/trustpilot.png" alt="Trustpilot" width={140} height={40} />
              <Image src="/logos/ecologi.png" alt="Ecologi" width={100} height={40} />
              <Image src="/logos/what3words.png" alt="What3Words" width={60} height={60} />
            </div>
          </div>
        </div>
      </div>

      {/* Country Selector */}
      <div className="bg-[#f6f6f6] text-gray-800 py-4 text-sm text-center">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {countries.map((country, idx) => (
            <span
              key={idx}
              className={`cursor-pointer text-sm sm:text-base ${
                country === "United Kingdom" ? "font-semibold underline" : ""
              }`}
            >
              {country}
            </span>
          ))}
        </div>
      </div>

      {/* Legal Footer Section */}
      <div className="bg-white text-gray-600 text-xs sm:text-sm text-center py-4 border-t">
        <p className="mb-2 sm:mb-1">
          Copyright © Parcel Monkey Ltd 2025 | Company No. 070979496 | VAT No. 981509987
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-2 sm:mt-1">
          <button onClick={() => router.push("/terms")} className="hover:underline text-xs sm:text-sm">
            Terms & Conditions
          </button>
          <button onClick={() => router.push("/privacy-policy")} className="hover:underline text-xs sm:text-sm">
            Privacy Policy
          </button>
          <button onClick={() => router.push("/careers")} className="hover:underline text-xs sm:text-sm">
            Careers
          </button>
          <button onClick={() => router.push("/sitemap")} className="hover:underline text-xs sm:text-sm">
            Sitemap
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
