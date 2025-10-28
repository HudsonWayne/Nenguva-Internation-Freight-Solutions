"use client";

import Link from "next/link";

export default function Dpd() {
  return (
    <main className="bg-white text-gray-900">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 p-4">
        <Link href="/" className="hover:text-purple-700">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/couriers" className="hover:text-purple-700">
          Couriers
        </Link>{" "}
        &gt; <span className="text-purple-700 font-medium">DPD</span>
      </nav>

      {/* Header */}
      <section className="px-6 md:px-20 py-8">
        <h1 className="text-3xl font-bold text-purple-800 mb-4">
          Send a Parcel with DPD Courier Delivery
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="bg-purple-50 rounded-lg p-8 shadow">
            <h2 className="text-2xl font-semibold text-purple-800 mb-6">
              Services available from just{" "}
              <span className="text-green-600 text-3xl font-bold">£7.83</span>{" "}
              <span className="text-base text-gray-600">exc VAT</span>
            </h2>

            <ul className="space-y-3 text-lg">
              {[
                "Drop Off at any of the 2,500 DPD Pickup stores",
                "Collected services available",
                "Express delivery times",
                "Send up to 20kg",
                "DPD live tracking",
                "Choose your delivery day/slot via the DPD App",
                "FREE £20 loss/ damage cover included",
                "Optional protection cover available up to £1000",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-green-600 text-xl mr-2">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Quote Box */}
          <div className="bg-purple-900 text-white rounded-lg p-8 shadow-lg">
            <div className="flex justify-between mb-6">
              <button className="text-lg font-semibold border-b-2 border-green-400 pb-1">
                Parcel Delivery
              </button>
              <button className="text-lg font-semibold opacity-70">
                ParcelMonkey<span className="text-green-400">Local</span>
              </button>
            </div>

            <h2 className="text-xl font-semibold mb-4">
              Get an Instant Quote
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Collect from</label>
                <select className="w-full p-2 text-black rounded">
                  <option>United Kingdom</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm">Delivering to</label>
                <select className="w-full p-2 text-black rounded">
                  <option>United Kingdom</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm">Parcel Weight</label>
                <div className="flex">
                  <input
                    type="number"
                    placeholder="Enter weight"
                    className="flex-grow p-2 text-black rounded-l"
                  />
                  <span className="bg-purple-700 px-3 flex items-center rounded-r">
                    Kg
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-purple-900 font-semibold py-3 rounded mt-6"
              >
                Get Quote & Book
              </button>
            </form>

            <div className="mt-6 text-sm space-y-2 text-purple-200">
              <p>📦 Send multiple parcels</p>
              <p>📏 Parcel larger than 1m?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-6 px-6 md:px-20 pb-10">
        <button className="bg-gradient-to-b from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-3 px-8 rounded shadow-md">
          Track your DPD delivery here
        </button>
        <button className="bg-gradient-to-b from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-3 px-8 rounded shadow-md">
          DPD Drop Off Locations
        </button>
      </div>

      {/* Quick Links */}
      <section className="bg-yellow-50 px-6 md:px-20 py-10">
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-purple-800 underline">
          {[
            "About DPD",
            "DPD UK delivery services",
            "DPD international shipping",
            "DPD drop off services",
            "DPD track and trace",
            "DPD restrictions",
            "DPD delivery times",
          ].map((link) => (
            <li key={link}>
              <Link href="#" className="hover:text-purple-600">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
