"use client";

import { useRouter } from "next/navigation";

export default function ComparisonPage() {
  const router = useRouter();

  const services = [
    {
      name: "EVRi International Collected",
      price: "£121.59",
      delivery: "Delivery in 7-10 days",
      vat: "No VAT",
      protection: "£25",
      rating: 4,
    },
    {
      name: "Parcel Monkey Air Express",
      price: "£234.34",
      delivery: "Delivery by Air in 3-5 days",
      vat: "No VAT",
      protection: "£25",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-purple-800 py-4 flex justify-center">
        <h1 className="text-3xl font-bold text-white">
          parcel<span className="text-yellow-400">🐒</span>monkey
        </h1>
      </div>

      <div className="w-[90%] mx-auto mt-10">
        <h2 className="text-3xl font-bold text-purple-900 mb-2">
          Your Comparison Results
        </h2>
        <p className="text-gray-700 mb-6">
          We've found <strong>{services.length} services</strong> from{" "}
          <span className="font-semibold text-purple-700">£121.09</span>
        </p>

        {services.map((s, i) => (
          <div
            key={i}
            className="flex justify-between items-center border border-gray-200 shadow-sm rounded-xl p-6 mb-4"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{s.name}</h3>
              <p className="text-gray-600">{s.delivery}</p>
              <p className="text-sm text-gray-500">{s.vat}</p>
              <p className="text-green-600 text-sm mt-1">
                Includes {s.protection} protection
              </p>
            </div>

            <div className="text-right">
              <p className="text-2xl font-bold text-purple-700">{s.price}</p>
              <button
                className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                onClick={() => alert(`Booked ${s.name}`)}
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
