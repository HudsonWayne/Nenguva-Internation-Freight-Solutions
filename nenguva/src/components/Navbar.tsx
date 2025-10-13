"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  const pathname = usePathname(); // Get current path

  const isActive = (href) => pathname === href;

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
            {/* Home */}
            <li>
              <Link
                href="/"
                className={`inline-flex items-center gap-2 hover:text-yellow-300 ${
                  isActive("/") ? "text-yellow-400" : ""
                }`}
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

            {/* Tracking (fixed to go to tracking page) */}
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

            {/* Services */}
            <li className="relative">
              <button
                className={`hover:text-yellow-300 ${
                  pathname.startsWith("/courier-services") ||
                  pathname === "/delivery-services"
                    ? "text-yellow-400"
                    : ""
                }`}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
              </button>
              {servicesOpen && (
                <ul className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg p-4 w-64 space-y-1 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/courier-services"
                      className={`hover:text-purple-700 ${
                        isActive("/courier-services") ? "text-yellow-400" : ""
                      }`}
                    >
                      Courier Companies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/courier-services/dhl"
                      className={`hover:text-purple-700 ${
                        isActive("/courier-services/dhl") ? "text-yellow-400" : ""
                      }`}
                    >
                      DHL
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/courier-services/dpd"
                      className={`hover:text-purple-700 ${
                        isActive("/courier-services/dpd") ? "text-yellow-400" : ""
                      }`}
                    >
                      DPD
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/courier-services/ups"
                      className={`hover:text-purple-700 ${
                        isActive("/courier-services/ups") ? "text-yellow-400" : ""
                      }`}
                    >
                      UPS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/delivery-services"
                      className={`hover:text-purple-700 ${
                        isActive("/delivery-services") ? "text-yellow-400" : ""
                      }`}
                    >
                      Parcel Delivery Services
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Guides */}
            <li className="relative">
              <button
                className={`hover:text-yellow-300 ${
                  pathname.startsWith("/delivery-sizes") ||
                  pathname.startsWith("/postage-rates") ||
                  pathname.startsWith("/customs-charges") ||
                  pathname.startsWith("/multi-parcels")
                    ? "text-yellow-400"
                    : ""
                }`}
                onClick={() => setGuidesOpen(!guidesOpen)}
              >
                Guides
              </button>
              {guidesOpen && (
                <ul className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg p-4 w-64 space-y-1 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/delivery-sizes"
                      className={`hover:text-purple-700 ${
                        isActive("/delivery-sizes") ? "text-yellow-400" : ""
                      }`}
                    >
                      Parcel Weight & Size Limits
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/postage-rates"
                      className={`hover:text-purple-700 ${
                        isActive("/postage-rates") ? "text-yellow-400" : ""
                      }`}
                    >
                      Postage Rates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/customs-charges"
                      className={`hover:text-purple-700 ${
                        isActive("/customs-charges") ? "text-yellow-400" : ""
                      }`}
                    >
                      Customs Charges
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/multi-parcels"
                      className={`hover:text-purple-700 ${
                        isActive("/multi-parcels") ? "text-yellow-400" : ""
                      }`}
                    >
                      Sending Multiple Parcels
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Reviews */}
            <li>
              <Link
                href="/reviews.php"
                className={`hover:text-yellow-300 ${
                  isActive("/reviews.php") ? "text-yellow-400" : ""
                }`}
              >
                Reviews
              </Link>
            </li>

            {/* Rewards */}
            <li>
              <Link
                href="/my-rewards"
                className={`hover:text-yellow-300 ${
                  isActive("/my-rewards") ? "text-yellow-400" : ""
                }`}
              >
                Rewards
              </Link>
            </li>

            {/* Contact */}
            <li className="flex items-center gap-2">
              <Link
                href="/contactus4.php"
                className={`hover:text-yellow-300 ${
                  isActive("/contactus4.php") ? "text-yellow-400" : ""
                }`}
              >
                Contact Us
              </Link>
              {/* Cart Icon */}
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

            {/* Login */}
            <li>
              <Link
                href="/login.php"
                className={`hover:text-yellow-300 ${
                  isActive("/login.php") ? "text-yellow-400" : ""
                }`}
              >
                Log In
              </Link>
            </li>

            {/* Signup */}
            <li>
              <Link
                href="/register.php"
                className={`bg-yellow-400 text-purple-900 px-4 py-1 rounded hover:bg-yellow-300 ${
                  isActive("/register.php") ? "text-yellow-400" : ""
                }`}
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
