"use client";

import { useState } from "react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("uk");

  return (
    <section className="relative w-full bg-gradient-to-br from-purple-700 to-purple-800 text-white py-10 px-6 shadow-xl overflow-hidden">
      <div className="text-center max-w-4xl mx-auto">
        {/* Left Side (Text content centered) */}
        <div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Compare and book <br />
            <span className="text-5xl font-extrabold text-yellow-300">
              parcel delivery services
            </span>
          </h1>

          {/* Watch video button */}
          <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 transition px-4 py-2 mt-4">
            <div className="bg-red-500 w-6 h-6 flex items-center justify-center">
              ▶
            </div>
            <span>Watch our video</span>
          </button>
        </div>
      </div>

      {/* Quote Form */}
      <div className="bg-white text-gray-800 mt-10 shadow-lg max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex">
          <button
            onClick={() => setActiveTab("uk")}
            className={`w-1/2 py-3 text-lg font-semibold ${
              activeTab === "uk"
                ? "bg-green-500 text-white"
                : "bg-gray-900 text-white"
            }`}
          >
            UK to UK
          </button>
          <button
            onClick={() => setActiveTab("international")}
            className={`w-1/2 py-3 text-lg font-semibold ${
              activeTab === "international"
                ? "bg-green-500 text-white"
                : "bg-gray-900 text-white"
            }`}
          >
            International
          </button>
        </div>

        {/* Form */}
        <form className="p-6 grid sm:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Collect from
            </label>
            <select className="w-full border border-gray-300 px-3 py-2">
              <option>United Kingdom</option>
              <option>South Africa</option>
              <option>Zimbabwe</option>
              <option>USA</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Delivering to
            </label>
            <select className="w-full border border-gray-300 px-3 py-2">
              <option>United Kingdom</option>
              <option>South Africa</option>
              <option>Zimbabwe</option>
              <option>USA</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Parcel weight
            </label>
            <input
              type="text"
              placeholder="Eg. 1 Kg"
              className="w-full border border-gray-300 px-3 py-2"
            />
          </div>

          <div className="flex flex-col items-center">
            <label className="block text-sm font-semibold mb-1">
              I will fill in dimensions:
            </label>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-1 text-sm">
                <input
                  type="radio"
                  name="dimensions"
                  value="later"
                  defaultChecked
                />{" "}
                later
              </label>
              <label className="flex items-center gap-1 text-sm">
                <input type="radio" name="dimensions" value="now" /> now
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="sm:col-span-4 bg-green-500 text-white py-3 font-semibold hover:bg-green-600 mt-4"
          >
            Get Quote
          </button>
        </form>

        {/* Footer links */}
        <div className="text-center text-sm text-gray-600 border-t border-gray-200 py-3 space-x-2">
          <a href="#" className="hover:text-purple-700">
            Need same-day delivery
          </a>
          |
          <a href="#" className="hover:text-purple-700">
            Parcel larger than 1m?
          </a>
          |
          <a href="#" className="hover:text-purple-700">
            Send multiple parcels
          </a>
        </div>
      </div>
    </section>
  );
}
