"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ComparisonPage() {
  const router = useRouter();

  const services = [
    {
      logo: "/evri.png",
      name: "EVRi International Collected",
      price: "£121.59",
      delivery: "Delivery in 7–10 days",
      vat: "No VAT",
      protection: "£25 Protection (Upgradable to £2,500)",
      rating: 4,
      time: "Book within 11 hours for collection tomorrow",
    },
    {
      logo: "/parcelmonkey.png",
      name: "Parcel Monkey Air Express",
      price: "£234.34",
      delivery: "Delivery by Air in 3–5 days",
      vat: "No VAT",
      protection: "£25 Protection (Upgradable to £2,500)",
      rating: 4,
      time: "Book within 15 hours for collection tomorrow",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Section */}
      <div className="w-[90%] mx-auto mt-10">
        <h2 className="text-3xl font-bold text-purple-900 mb-2">
          Your <span className="text-gray-800">Comparison Results</span>
        </h2>

        {/* Results Info Bar */}
        <div className="flex flex-wrap items-center justify-between bg-purple-900 text-white rounded-md p-4 shadow-sm mb-8">
          <p className="text-lg">
            We’ve found <strong>{services.length} services</strong> from{" "}
            <span className="text-yellow-400 font-semibold">£121.09</span>
          </p>

          <div className="flex items-center space-x-3">
            <button className="bg-yellow-400 text-purple-900 font-semibold px-4 py-2 rounded shadow hover:bg-yellow-300 transition">
              View cheapest
            </button>

            <label className="flex items-center space-x-1">
              <input type="checkbox" />
              <span>Collected</span>
            </label>
            <label className="flex items-center space-x-1">
              <input type="checkbox" />
              <span>Drop Off</span>
            </label>
            <label className="flex items-center space-x-1">
              <input type="checkbox" />
              <span>No Printer Required</span>
            </label>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-4 mb-8">
          <button className="bg-purple-800 text-white font-semibold px-6 py-2 rounded-md">
            POPULAR <span className="text-sm font-normal">from £0.00</span>
          </button>
          <button className="bg-purple-900 text-white font-semibold px-6 py-2 rounded-md border-b-4 border-yellow-400">
            INTL PRIORITY{" "}
            <span className="text-sm font-normal">from £121.59</span>
          </button>
          <button className="bg-purple-700 text-white font-semibold px-6 py-2 rounded-md">
            DROP OFF <span className="text-sm font-normal">from £121.09</span>
          </button>

          <button className="ml-auto bg-yellow-400 text-purple-900 font-semibold px-6 py-2 rounded-md shadow hover:bg-yellow-300 transition">
            Refine Search
          </button>
        </div>

        {/* Service Cards */}
        {services.map((s, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-white border border-gray-200 rounded-xl shadow-sm p-5 mb-5 hover:shadow-md transition"
          >
            <div className="flex items-center space-x-4">
              {s.logo && (
                <Image
                  src={s.logo}
                  alt={s.name}
                  width={90}
                  height={50}
                  className="object-contain"
                />
              )}
              <div>
                <h3 className="text-lg font-bold text-gray-800">{s.name}</h3>
                <p className="text-gray-600">{s.delivery}</p>
                <p className="text-sm text-gray-500">{s.vat}</p>
                <p className="text-green-600 text-sm mt-1">Inc {s.protection}</p>
              </div>
            </div>

            <div className="text-right flex flex-col items-end">
              <p className="text-2xl font-bold text-purple-800 mb-1">
                {s.price}
              </p>
              <div className="flex items-center text-yellow-500 mb-1">
                {Array.from({ length: s.rating }).map((_, index) => (
                  <span key={index}>⭐</span>
                ))}
              </div>
              <p className="text-red-500 text-sm mb-2">{s.time}</p>
              <button
                onClick={() => router.push("/book")}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={() => router.push("/send-parcels")}
          className="text-purple-700 underline mt-6"
        >
          ← Back to Send Parcels
        </button>
      </div>
    </div>
  );
}
