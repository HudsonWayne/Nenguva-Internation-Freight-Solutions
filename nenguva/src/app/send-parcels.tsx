"use client";
import { useState } from "react";

export default function SendParcelsPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [weight, setWeight] = useState("");
  const [quote, setQuote] = useState<number | null>(null);

  const handleQuote = (e: React.FormEvent) => {
    e.preventDefault();

    // simple mock price calculation
    const basePrice = 5;
    const distanceFactor = from && to ? 10 : 0;
    const weightFactor = Number(weight) * 2;
    const total = basePrice + distanceFactor + weightFactor;
    setQuote(total);
  };

  return (
    <section className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-700 mb-4 text-center">
        Send Your Parcel 🚚
      </h1>
      <p className="text-gray-700 mb-6 text-center">
        Enter your parcel details below to get a delivery quote instantly.
      </p>

      <form
        onSubmit={handleQuote}
        className="bg-white shadow-lg rounded-2xl p-6 space-y-4"
      >
        <div>
          <label className="block text-left text-sm font-semibold text-gray-700">
            From:
          </label>
          <input
            type="text"
            placeholder="Enter pickup location"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="block text-left text-sm font-semibold text-gray-700">
            To:
          </label>
          <input
            type="text"
            placeholder="Enter delivery location"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="block text-left text-sm font-semibold text-gray-700">
            Parcel Weight (kg):
          </label>
          <input
            type="number"
            placeholder="Eg. 2"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition"
        >
          Get Quote
        </button>
      </form>

      {quote !== null && (
        <div className="mt-6 bg-green-100 border border-green-400 text-green-800 p-4 rounded-lg text-center">
          <h2 className="text-xl font-semibold">Estimated Delivery Quote</h2>
          <p className="text-lg mt-2">
            💰 Your parcel delivery cost is{" "}
            <span className="font-bold">${quote.toFixed(2)}</span>
          </p>
        </div>
      )}
    </section>
  );
}
