"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("uk");

  return (
    <section className="relative bg-gradient-to-br from-purple-700 to-purple-800 text-white py-10 px-6 rounded-3xl mx-auto mt-8 max-w-6xl shadow-xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Compare and book <br />
            <span className="text-5xl font-extrabold text-yellow-300">
              parcel delivery services
            </span>
          </h1>

          {/* Watch video button */}
          <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition px-4 py-2 rounded-full mt-4">
            <div className="bg-red-500 w-6 h-6 flex items-center justify-center rounded-full">
              ▶
            </div>
            <span>Watch our video</span>
          </button>

          {/* Trustpilot Section */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <div className="flex items-center">
              <span className="text-sm mr-2">★ Trustpilot</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`w-5 h-5 flex items-center justify-center ${
                      i < 5 ? "bg-green-400" : "bg-gray-300"
                    } text-white text-xs font-bold mr-1`}
                  >
                    ★
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-200">
              TrustScore 3.8{" "}
              <a href="#" className="underline">
                90,195 reviews
              </a>
            </p>
          </div>
        </div>

        {/* Right Side (Monkey image) */}
        <div className="relative flex justify-center">
          <Image
            src="/monkey.png"
            alt="Monkey Mascot"
            width={300}
            height={300}
            className="drop-shadow-lg"
          />
        </div>
      </div>

      {/* Quote Form */}
      <div className="bg-white rounded-2xl text-gray-800 mt-10 shadow-lg">
        {/* Tabs */}
        <div className="flex">
          <button
            onClick={() => setActiveTab("uk")}
            className={`w-1/2 py-3 text-lg font-semibold rounded-t-2xl ${
              activeTab === "uk"
                ? "bg-green-500 text-white"
                : "bg-gray-900 text-white"
            }`}
          >
            UK to UK
          </button>
          <button
            onClick={() => setActiveTab("international")}
            className={`w-1/2 py-3 text-lg font-semibold rounded-t-2xl ${
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
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
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
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
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
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          <div className="flex flex-col items-center">
            <label className="block text-sm font-semibold mb-1">
              I will fill in dimensions:
            </label>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-1 text-sm">
                <input type="radio" name="dimensions" value="later" defaultChecked /> later
              </label>
              <label className="flex items-center gap-1 text-sm">
                <input type="radio" name="dimensions" value="now" /> now
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="sm:col-span-4 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 mt-4"
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
