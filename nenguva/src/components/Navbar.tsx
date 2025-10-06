"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [trackingOpen, setTrackingOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/templates/pmMain/img/logo/logo-272.png"
            alt="Parcel Monkey"
            width={150}
            height={40}
            className="w-auto h-10"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-sm text-gray-700 border px-3 py-1 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {/* Nav Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:flex md:space-x-6 shadow-md md:shadow-none p-4 md:p-0`}
        >
          <ul className="space-y-4 md:space-y-0 md:flex md:items-center md:gap-6">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/quotev3.php" className="text-gray-700 hover:text-blue-600">
                Send Parcels
              </Link>
            </li>

            {/* Tracking */}
            <li className="relative">
              <button
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setTrackingOpen(!trackingOpen)}
              >
                Tracking ⬇
              </button>
              {trackingOpen && (
                <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg p-4 w-64">
                  <form action="/tracking.php" method="post" className="space-y-2">
                    <h3 className="font-semibold text-gray-800 text-sm">
                      Track Your Parcel
                    </h3>
                    <input
                      type="text"
                      name="tracking"
                      placeholder="PM_#######_#######"
                      className="w-full border rounded px-2 py-1 text-sm"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-1 rounded text-sm"
                    >
                      Track Now
                    </button>
                  </form>
                </div>
              )}
            </li>

            {/* Services */}
            <li className="relative">
              <button
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services ⬇
              </button>
              {servicesOpen && (
                <ul className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg p-4 w-64 space-y-1 text-sm text-gray-700">
                  <li>
                    <Link href="/courier-services" className="hover:text-blue-600">
                      Courier Companies
                    </Link>
                  </li>
                  <li>
                    <Link href="/courier-services/dhl" className="hover:text-blue-600">
                      DHL
                    </Link>
                  </li>
                  <li>
                    <Link href="/courier-services/dpd" className="hover:text-blue-600">
                      DPD
                    </Link>
                  </li>
                  <li>
                    <Link href="/courier-services/ups" className="hover:text-blue-600">
                      UPS
                    </Link>
                  </li>
                  <li>
                    <Link href="/delivery-services" className="hover:text-blue-600">
                      Parcel Delivery Services
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Guides */}
            <li className="relative">
              <button
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setGuidesOpen(!guidesOpen)}
              >
                Guides ⬇
              </button>
              {guidesOpen && (
                <ul className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg p-4 w-64 space-y-1 text-sm text-gray-700">
                  <li>
                    <Link href="/delivery-sizes" className="hover:text-blue-600">
                      Parcel Weight & Size Limits
                    </Link>
                  </li>
                  <li>
                    <Link href="/postage-rates" className="hover:text-blue-600">
                      Postage Rates
                    </Link>
                  </li>
                  <li>
                    <Link href="/customs-charges" className="hover:text-blue-600">
                      Customs Charges
                    </Link>
                  </li>
                  <li>
                    <Link href="/multi-parcels" className="hover:text-blue-600">
                      Sending Multiple Parcels
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Static Links */}
            <li>
              <Link href="/reviews.php" className="text-gray-700 hover:text-blue-600">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/my-rewards" className="text-gray-700 hover:text-blue-600">
                Rewards
              </Link>
            </li>
            <li>
              <Link href="/contactus4.php" className="text-gray-700 hover:text-blue-600">
                Contact Us
              </Link>
            </li>

            {/* Login & Signup */}
            <li>
              <Link href="/login.php" className="text-gray-700 hover:text-blue-600">
                Log In
              </Link>
            </li>
            <li>
              <Link
                href="/register.php"
                className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
