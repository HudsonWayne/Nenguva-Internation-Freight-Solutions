"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-purple-700 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 text-white relative">
        {/* Logo */}
        <h1 className="text-xl font-bold">Nenguva</h1>

        {/* Mobile menu button */}
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

            {/* Services Mega Menu */}
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

              {servicesOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-[1000px] bg-purple-800 text-white p-8 rounded-2xl shadow-2xl grid grid-cols-4 gap-8 z-50">
                  {/* Column 1 */}
                  <div>
                    <h3 className="font-bold uppercase mb-3 text-sm border-b border-purple-600 pb-1">
                      Courier Companies
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>DPD</li>
                      <li>DHL</li>
                      <li>DX</li>
                      <li>UPS</li>
                      <li>FedEx Express</li>
                      <li>Parcelforce</li>
                      <li>Evri</li>
                      <li>Yodel Direct</li>
                      <li>CitySprint</li>
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <h3 className="font-bold uppercase mb-3 text-sm border-b border-purple-600 pb-1">
                      Courier Services
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>DHL Parcel UK</li>
                      <li>DPD Air Express</li>
                      <li>DPD Classic</li>
                      <li>DX Freight</li>
                      <li>Evri Collection</li>
                      <li>Evri Drop Off</li>
                      <li>Parcel Monkey Air Express</li>
                      <li>Parcelforce 24</li>
                      <li>Yodel Direct Drop Off</li>
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div>
                    <h3 className="font-bold uppercase mb-3 text-sm border-b border-purple-600 pb-1">
                      Parcel Delivery Services
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>International Delivery</li>
                      <li>Domestic UK Delivery</li>
                      <li>Large Parcel Delivery</li>
                      <li>Heavy Parcel Delivery</li>
                      <li>Next Day Delivery</li>
                      <li>Weekend Delivery</li>
                      <li>Recorded Delivery</li>
                      <li>Same Day Courier</li>
                    </ul>
                  </div>

                  {/* Column 4 */}
                  <div>
                    <h3 className="font-bold uppercase mb-3 text-sm border-b border-purple-600 pb-1">
                      International Shipping
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>Europe</li>
                      <li>North America</li>
                      <li>South America</li>
                      <li>Asia</li>
                      <li>Africa</li>
                      <li>Middle East</li>
                      <li>Oceania</li>
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
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white border rounded-xl shadow-xl p-4 w-64 space-y-2 text-sm text-gray-700">
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

            {/* Reviews */}
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

            {/* Rewards */}
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

            {/* Contact */}
            <li>
              <Link
                href="/contact"
                className={`hover:text-yellow-300 ${
                  isActive("/contact") ? "text-yellow-400" : ""
                }`}
              >
                Contact Us
              </Link>
            </li>

            {/* Login */}
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

            {/* Signup */}
            <li>
              <Link
                href="/register"
                className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-lg font-semibold hover:bg-yellow-300"
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
