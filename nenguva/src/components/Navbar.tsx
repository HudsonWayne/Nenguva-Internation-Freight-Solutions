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
    <header className="sticky top-0 z-50 bg-purple-700 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 text-white">
        <h1 className="text-xl font-bold">Nenguva</h1>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-sm text-white border border-white px-3 py-1 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {/* Nav Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-purple-700 md:flex md:space-x-6 shadow-md md:shadow-none p-4 md:p-0`}
        >
          <ul className="space-y-4 md:space-y-0 md:flex md:items-center md:gap-6">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-300 inline-flex items-center gap-2"
              >
                {/* Home icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10.707 1.707a1 1 0 00-1.414 0L2 9v8a1 1 0 001 1h5a1 1 0 001-1V12h2v5a1 1 0 001 1h5a1 1 0 001-1V9l-7.293-7.293z" />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/send-parcels"
                className="hover:text-yellow-300"
              >
                Send Parcels
              </Link>
            </li>

            {/* Tracking */}
            <li className="relative">
              <button
                className="hover:text-yellow-300"
                onClick={() => setTrackingOpen(!trackingOpen)}
              >
                Tracking
              </button>
              {trackingOpen && (
                <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg p-4 w-64 text-gray-700">
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
                      className="w-full bg-purple-700 text-white py-1 rounded text-sm hover:bg-purple-800"
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
                className="hover:text-yellow-300"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
              </button>
              {servicesOpen && (
                <ul className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg p-4 w-64 space-y-1 text-sm text-gray-700">
                  <li>
                    <Link href="/courier-services" className="hover:text-purple-700">
                      Courier Companies
                    </Link>
                  </li>
                  <li>
                    <Link href="/courier-services/dhl" className="hover:text-purple-700">
                      DHL
                    </Link>
                  </li>
                  <li>
                    <Link href="/courier-services/dpd" className="hover:text-purple-700">
                      DPD
                    </Link>
                  </li>
                  <li>
                    <Link href="/courier-services/ups" className="hover:text-purple-700">
                      UPS
                    </Link>
                  </li>
                  <li>
                    <Link href="/delivery-services" className="hover:text-purple-700">
                      Parcel Delivery Services
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Guides */}
            <li className="relative">
              <button
                className="hover:text-yellow-300"
                onClick={() => setGuidesOpen(!guidesOpen)}
              >
                Guides
              </button>
              {guidesOpen && (
                <ul className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg p-4 w-64 space-y-1 text-sm text-gray-700">
                  <li>
                    <Link href="/delivery-sizes" className="hover:text-purple-700">
                      Parcel Weight & Size Limits
                    </Link>
                  </li>
                  <li>
                    <Link href="/postage-rates" className="hover:text-purple-700">
                      Postage Rates
                    </Link>
                  </li>
                  <li>
                    <Link href="/customs-charges" className="hover:text-purple-700">
                      Customs Charges
                    </Link>
                  </li>
                  <li>
                    <Link href="/multi-parcels" className="hover:text-purple-700">
                      Sending Multiple Parcels
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Static Links */}
            <li>
              <Link
                href="/reviews.php"
                className="hover:text-yellow-300"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/my-rewards"
                className="hover:text-yellow-300"
              >
                Rewards
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link
                href="/contactus4.php"
                className="hover:text-yellow-300"
              >
                Contact Us
              </Link>
              {/* Cart icon after Contact */}
              <span className="inline-block align-middle" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </span>
            </li>

            {/* Login & Signup */}
            <li>
              <Link
                href="/login.php"
                className="hover:text-yellow-300"
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                href="/register.php"
                className="bg-yellow-400 text-purple-900 px-4 py-1 rounded hover:bg-yellow-300"
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
