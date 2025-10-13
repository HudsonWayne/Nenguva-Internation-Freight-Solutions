"use client";

import Image from "next/image";
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
        <h1 className="text-xl font-bold">Nenguva</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-sm text-white border border-white px-3 py-1 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {/* Desktop Nav */}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
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
                <div className="absolute left-0 mt-2 w-[900px] bg-purple-800 text-white p-6 rounded-lg shadow-2xl grid grid-cols-4 gap-6 z-50">
                  {/* Courier Companies */}
                  <div>
                    <h3 className="font-bold uppercase mb-3 text-sm">
                      Courier Companies
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>DPD</li>
                      <li>DX</li>
                      <li>DHL</li>
                      <li>Parcelforce</li>
                      <li>Parcel Monkey International</li>
                      <li>CitySprint</li>
                      <li>UPS</li>
                      <li>FedEx Express</li>
                      <li>Yodel Direct</li>
                      <li>Evri</li>
                      <li>DeliveryApp</li>
                    </ul>
                  </div>

                  {/* Courier Services */}
                  <div>
                    <h3 className="font-bold uppercase mb-3 text-sm">
                      Courier Services
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>DHL Parcel UK</li>
                      <li>DPD Air Classic</li>
                      <li>DPD Air Express</li>
                      <li>DPD Classic</li>
                      <li>DPD Drop Off</li>
                      <li>DX Freight</li>
                      <li>Evri Collection</li>
                      <li>Evri Drop Off</li>
                      <li>Evri International Collection</li>
                      <li>Evri International Drop Off</li>
                      <li>FedEx International Economy Drop Off</li>
                      <li>FedEx International Priority Drop Off</li>
                      <li>FedEx Next Day Drop Off</li>
                      <li>FedEx Regional Economy Drop Off</li>
                      <li>Parcel Monkey Air Express</li>
                      <li>Parcel Monkey Europe By Road</li>
                      <li>Parcelforce 24</li>
                      <li>Parcelforce 48</li>
                      <li>Parcelforce 48 Large</li>
                      <li>Parcelforce Global Priority</li>
                      <li>Yodel Direct Economy Drop Off</li>
                    </ul>
                  </div>

                  {/* Parcel Delivery Services */}
                  <div>
                    <h3 className="font-bold uppercase mb-3 text-sm">
                      Parcel Delivery Services
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>International parcel delivery</li>
                      <li>Domestic UK delivery</li>
                      <li>Large parcel delivery</li>
                      <li>Heavy parcel delivery</li>
                      <li>Long parcel delivery</li>
                      <li>Small parcel delivery</li>
                      <li>Courier parcel collection</li>
                      <li>Parcel drop off</li>
                      <li>Pallet delivery</li>
                      <li>Recorded delivery service</li>
                      <li>Same day courier service</li>
                      <li>Next day parcel delivery</li>
                      <li>Next morning delivery before 9 am</li>
                      <li>Next morning delivery before 10 am</li>
                      <li>Next morning delivery before 12 pm</li>
                      <li>Saturday parcel delivery</li>
                      <li>Sunday parcel delivery</li>
                      <li>Expedited parcel delivery</li>
                      <li>Overnight courier service</li>
                      <li>Ebay courier service</li>
                      <li>Bike courier service</li>
                      <li>Motorbike courier service</li>
                      <li>Service updates</li>
                    </ul>
                  </div>

                  {/* International Shipping Destinations */}
                  <div>
                    <h3 className="font-bold uppercase mb-3 text-sm">
                      International Shipping Destinations
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>Europe</li>
                      <li>North & Central America</li>
                      <li>South America</li>
                      <li>Asia</li>
                      <li>Middle East</li>
                      <li>Africa</li>
                      <li>Oceania</li>
                      <li>Caribbean</li>
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

            {/* Contact Us */}
            <li>
              <Link
                href="/contactus4.php"
                className={`hover:text-yellow-300 ${
                  isActive("/contactus4.php") ? "text-yellow-400" : ""
                }`}
              >
                Contact Us
              </Link>
            </li>

            {/* Log In */}
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

            {/* Sign Up */}
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
