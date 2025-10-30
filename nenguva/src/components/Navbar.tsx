"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const servicesRef = useRef<HTMLLIElement>(null);

  const isActive = (href: string) => pathname === href;

  // Convert text to URL slug
  const slugify = (text: string) =>
    `/services/${text.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  // ✅ Close Services dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-purple-700 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 text-white relative">
        {/* Logo */}
        <h1 className="text-xl font-bold">Nenguva</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-sm text-white border border-white px-3 py-1 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden md:!flex"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-purple-700 md:bg-transparent md:shadow-none shadow-md p-4 md:p-0`}
        >
          <ul className="space-y-4 md:space-y-0 md:flex md:items-center md:gap-6">
            {/* Home */}
            <li>
              <Link
                href="/"
                className={`hover:text-yellow-300 ${
                  isActive("/") ? "text-yellow-400" : ""
                }`}
              >
                Home
              </Link>
            </li>

            {/* Send Parcels */}
            <li>
              <Link
                href="/send-parcels"
                className={`hover:text-yellow-300 ${
                  isActive("/send-parcels") ? "text-yellow-400" : ""
                }`}
              >
                Send Parcels
              </Link>
            </li>

            {/* Tracking */}
            <li>
              <Link
                href="/tracking"
                className={`hover:text-yellow-300 ${
                  isActive("/tracking") ? "text-yellow-400" : ""
                }`}
              >
                Tracking
              </Link>
            </li>

            {/* ✅ Services Dropdown (Clickable) */}
            <li ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`hover:text-yellow-300 ${
                  servicesOpen ? "text-yellow-400" : ""
                }`}
              >
                Services
              </button>

              {servicesOpen && (
                <div className="fixed top-7 left-1/2 -translate-x-1/2 mt-4 bg-purple-800 text-white rounded-xl shadow-xl grid grid-cols-4 gap-10 px-12 py-8 z-50 w-[80vw] max-w-[1400px]">
                  {/* COURIER COMPANIES */}
                  <div>
                    <h3 className="font-bold mb-4 border-b border-purple-600 pb-2 text-lg">
                      COURIER COMPANIES
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {[
                        "DPD",
                        "DX",
                        "DHL",
                        "Parcelforce",
                        "Parcel Monkey International",
                        "CitySprint",
                        "UPS",
                        "FedEx Express",
                        "Yodel Direct",
                        "Evri",
                        "DeliveryApp",
                      ].map((item) => (
                        <li
                          key={item}
                          className="hover:bg-gray-600 rounded px-2"
                          onClick={() => setServicesOpen(false)}
                        >
                          <Link href={slugify(item)}>{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* COURIER SERVICES */}
                  <div>
                    <h3 className="font-bold mb-4 border-b border-purple-600 pb-2 text-lg">
                      COURIER SERVICES
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {[
                        "DHL Parcel UK",
                        "DPD Air Classic",
                        "DPD Air Express",
                        "DPD Classic",
                        "DPD Drop Off",
                        "DX Freight",
                        "Evri Collection",
                        "Evri Drop Off",
                        "Evri International Collection",
                        "Evri International Drop Off",
                        "FedEx International Economy Drop Off",
                        "FedEx International Priority Drop Off",
                        "FedEx Next Day Drop Off",
                        "FedEx Regional Economy Drop Off",
                        "Parcel Monkey Air Express",
                        "Parcel Monkey Europe By Road",
                        "Parcelforce 24",
                        "Parcelforce 48",
                        "Parcelforce 48 Large",
                        "Parcelforce Global Priority",
                        "Yodel Direct Economy Drop Off",
                      ].map((item) => (
                        <li
                          key={item}
                          className="hover:bg-gray-600 rounded px-2"
                          onClick={() => setServicesOpen(false)}
                        >
                          <Link href={slugify(item)}>{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* PARCEL DELIVERY SERVICES */}
                  <div>
                    <h3 className="font-bold mb-4 border-b border-purple-600 pb-2 text-lg">
                      PARCEL DELIVERY SERVICES
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {[
                        "International parcel delivery",
                        "Domestic UK delivery",
                        "Large parcel delivery",
                        "Heavy parcel delivery",
                        "Long parcel delivery",
                        "Small parcel delivery",
                        "Courier parcel collection",
                        "Parcel drop off",
                        "Pallet delivery",
                        "Recorded delivery service",
                        "Same day courier service",
                        "Next day parcel delivery",
                        "Next morning delivery before 9 am",
                        "Next morning delivery before 10 am",
                        "Next morning delivery before 12 pm",
                        "Saturday parcel delivery",
                        "Sunday parcel delivery",
                        "Expedited parcel delivery",
                        "Overnight courier service",
                        "Ebay courier service",
                        "Bike courier service",
                        "Motorbike courier service",
                        "Service updates",
                      ].map((item) => (
                        <li
                          key={item}
                          className="hover:bg-gray-600 rounded px-2"
                          onClick={() => setServicesOpen(false)}
                        >
                          <Link href={slugify(item)}>{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* INTERNATIONAL SHIPPING DESTINATIONS */}
                  <div>
                    <h3 className="font-bold mb-4 border-b border-purple-600 pb-2 text-lg">
                      INTERNATIONAL SHIPPING DESTINATIONS
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Europe",
                        "North & Central America",
                        "South America",
                        "Asia",
                        "Middle East",
                        "Africa",
                        "Oceania",
                        "Caribbean",
                      ].map((item) => (
                        <li
                          key={item}
                          className="hover:bg-gray-600 rounded px-2"
                          onClick={() => setServicesOpen(false)}
                        >
                          <Link href={slugify(item)}>{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>

            {/* Guides Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setGuidesOpen(true)}
              onMouseLeave={() => setGuidesOpen(false)}
            >
              <button
                className={`hover:text-yellow-300 ${
                  guidesOpen ? "text-yellow-400" : ""
                }`}
              >
                Guides
              </button>

              {guidesOpen && (
                <div className="fixed top-7 left-1/2 -translate-x-1/2 mt-4 bg-purple-800 text-white rounded-xl shadow-xl grid grid-cols-2 gap-10 px-12 py-8 z-50 w-[60vw] max-w-[1000px]">
                  {/* Parcel Delivery Guides */}
                  <div>
                    <h3 className="font-bold mb-4 border-b border-purple-600 pb-2 text-lg">
                      PARCEL DELIVERY GUIDES
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Parcel weight & size limits",
                        "Parcel delivery times",
                        "Postage rates",
                        "Sending parcels without labels",
                        "Sending high value items",
                        "Sending multiple parcels",
                        "Customs charges",
                        "How to weigh & measure parcels",
                        "How to calculate volume",
                        "How to calculate volumetric weight",
                        "How to calculate length & girth",
                        "How to address a letter or parcel to the USA",
                        "How to address a letter or parcel to Australia",
                        "What is what3words",
                        "What is PrePay",
                      ].map((item) => (
                        <li key={item} className="hover:bg-gray-600 rounded px-2">
                          <Link href={slugify(item)}>{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sending Niche Items */}
                  <div>
                    <h3 className="font-bold mb-4 border-b border-purple-600 pb-2 text-lg">
                      SENDING NICHE ITEMS
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Mobile phones",
                        "Alcohol",
                        "Bikes",
                        "Furniture",
                        "Car parts",
                        "Guitars",
                        "Wheels & tyres",
                        "Books",
                        "Clothing",
                        "Golf clubs",
                        "Mattresses",
                        "Batteries",
                        "Jewellery",
                        "Fishing rods",
                        "Pushchairs",
                        "Rugs",
                        "Chocolate",
                      ].map((item) => (
                        <li key={item} className="hover:bg-gray-600 rounded px-2">
                          <Link href={slugify(item)}>{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>

            {/* Other Links */}
            <li>
              <Link
                href="/reviews"
                className={`hover:text-yellow-300 ${
                  isActive("/reviews") ? "text-yellow-400" : ""
                }`}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/rewards"
                className={`hover:text-yellow-300 ${
                  isActive("/rewards") ? "text-yellow-400" : ""
                }`}
              >
                Rewards
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={`hover:text-yellow-300 ${
                  isActive("/contact-us") ? "text-yellow-400" : ""
                }`}
              >
                Contact Us
              </Link>
            </li>

            {/* Auth Section */}
            {session ? (
              <li className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-400 text-purple-900 rounded-full flex items-center justify-center font-bold uppercase">
                  {session.user?.name?.charAt(0) || "U"}
                </div>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="hover:text-yellow-300 font-medium"
                >
                  Sign Out
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    href="/register"
                    className={`hover:text-yellow-300 ${
                      isActive("/register") ? "text-yellow-400" : ""
                    }`}
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className={`hover:text-yellow-300 ${
                      isActive("/login") ? "text-yellow-400" : ""
                    }`}
                  >
                    Log In
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
