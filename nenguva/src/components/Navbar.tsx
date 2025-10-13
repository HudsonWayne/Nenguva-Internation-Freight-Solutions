"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

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
            menuOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-purple-700 md:flex md:space-x-6 shadow-md md:shadow-none p-4 md:p-0`}
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

            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`hover:text-yellow-300 ${
                  servicesOpen ? "text-yellow-400" : ""
                }`}
              >
                Services
              </button>

              {/* Gray background overlay */}
              {servicesOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-40 z-40"></div>
              )}

              {/* Mega Menu */}
              {servicesOpen && (
                <div className="fixed top-7 left-1/2 -translate-x-1/2 mt-4 bg-purple-800 text-white rounded-xl shadow-xl grid grid-cols-4 gap-10 px-12 py-8 z-50 w-[80vw] max-w-[1400px]">
                  {/* 1️⃣ Courier Companies */}
                  <div>
                    <h3 className="font-bold mb-4 border-b border-purple-600 pb-2 text-lg">
                      COURIER COMPANIES
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="#">DPD</Link></li>
                      <li><Link href="#">DX</Link></li>
                      <li><Link href="#">DHL</Link></li>
                      <li><Link href="#">Parcelforce</Link></li>
                      <li><Link href="#">Parcel Monkey International</Link></li>
                      <li><Link href="#">CitySprint</Link></li>
                      <li><Link href="#">UPS</Link></li>
                      <li><Link href="#">FedEx Express</Link></li>
                      <li><Link href="#">Yodel Direct</Link></li>
                      <li><Link href="#">Evri</Link></li>
                      <li><Link href="#">DeliveryApp</Link></li>
                    </ul>
                  </div>

                  {/* 2️⃣ Courier Services */}
                  <div>
                    <h3 className="font-bold mb-4 border-b border-purple-600 pb-2 text-lg">
                      COURIER SERVICES
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="#">DHL Parcel UK</Link></li>
                      <li><Link href="#">DPD Air Classic</Link></li>
                      <li><Link href="#">DPD Air Express</Link></li>
                      <li><Link href="#">DPD Classic</Link></li>
                      <li><Link href="#">DPD Drop Off</Link></li>
                      <li><Link href="#">DX Freight</Link></li>
                      <li><Link href="#">Evri Collection</Link></li>
                      <li><Link href="#">Evri Drop Off</Link></li>
                      <li><Link href="#">Evri International Collection</Link></li>
                      <li><Link href="#">Evri International Drop Off</Link></li>
                      <li><Link href="#">FedEx International Economy Drop Off</Link></li>
                      <li><Link href="#">FedEx International Priority Drop Off</Link></li>
                      <li><Link href="#">FedEx Next Day Drop Off</Link></li>
                      <li><Link href="#">FedEx Regional Economy Drop Off</Link></li>
                      <li><Link href="#">Parcel Monkey Air Express</Link></li>
                      <li><Link href="#">Parcel Monkey Europe By Road</Link></li>
                      <li><Link href="#">Parcelforce 24</Link></li>
                      <li><Link href="#">Parcelforce 48</Link></li>
                      <li><Link href="#">Parcelforce 48 Large</Link></li>
                      <li><Link href="#">Parcelforce Global Priority</Link></li>
                      <li><Link href="#">Yodel Direct Economy Drop Off</Link></li>
                    </ul>
                  </div>

                  {/* 3️⃣ Parcel Delivery Services */}
                  <div>
                    <h3 className="font-bold mb-4 border-b border-purple-600 pb-2 text-lg">
                      PARCEL DELIVERY SERVICES
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="#">International parcel delivery</Link></li>
                      <li><Link href="#">Domestic UK delivery</Link></li>
                      <li><Link href="#">Large parcel delivery</Link></li>
                      <li><Link href="#">Heavy parcel delivery</Link></li>
                      <li><Link href="#">Long parcel delivery</Link></li>
                      <li><Link href="#">Small parcel delivery</Link></li>
                      <li><Link href="#">Courier parcel collection</Link></li>
                      <li><Link href="#">Parcel drop off</Link></li>
                      <li><Link href="#">Pallet delivery</Link></li>
                      <li><Link href="#">Recorded delivery service</Link></li>
                      <li><Link href="#">Same day courier service</Link></li>
                      <li><Link href="#">Next day parcel delivery</Link></li>
                      <li><Link href="#">Next morning delivery before 9 am</Link></li>
                      <li><Link href="#">Next morning delivery before 10 am</Link></li>
                      <li><Link href="#">Next morning delivery before 12 pm</Link></li>
                      <li><Link href="#">Saturday parcel delivery</Link></li>
                      <li><Link href="#">Sunday parcel delivery</Link></li>
                      <li><Link href="#">Expedited parcel delivery</Link></li>
                      <li><Link href="#">Overnight courier service</Link></li>
                      <li><Link href="#">Ebay courier service</Link></li>
                      <li><Link href="#">Bike courier service</Link></li>
                      <li><Link href="#">Motorbike courier service</Link></li>
                      <li><Link href="#">Service updates</Link></li>
                    </ul>
                  </div>

                  {/* 4️⃣ International Shipping Destinations */}
                  <div>
                    <h3 className="font-bold mb-4 border-b border-purple-600 pb-2 text-lg">
                      INTERNATIONAL SHIPPING DESTINATIONS
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="#">Europe</Link></li>
                      <li><Link href="#">North & Central America</Link></li>
                      <li><Link href="#">South America</Link></li>
                      <li><Link href="#">Asia</Link></li>
                      <li><Link href="#">Middle East</Link></li>
                      <li><Link href="#">Africa</Link></li>
                      <li><Link href="#">Oceania</Link></li>
                      <li><Link href="#">Caribbean</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            {/* Other Links */}
            <li><Link href="#">Guides</Link></li>
            <li><Link href="#">Reviews</Link></li>
            <li><Link href="#">Rewards</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Sign Up</Link></li>
            <li><Link href="#">Log In</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
