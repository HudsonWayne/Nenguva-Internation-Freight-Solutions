"use client";
import { useState } from "react";

export default function SendParcelsSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md mt-6">
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
      >
        {showForm ? "Hide Form" : "Send Parcels"}
      </button>

      {showForm && (
        <div className="mt-6 space-y-4">
          <h1 className="text-2xl font-bold">
            Courier <span className="text-blue-600">Quote</span> Comparison
          </h1>

          <p>
            It’s easy to find and compare cheap parcel delivery prices. Enter
            your locations and box size, and we’ll find the best courier quotes.
          </p>

          <form
            action="https://www.parcelmonkey.co.uk/quotev3.php"
            method="post"
            className="space-y-4"
          >
            {/* Sending From */}
            <div>
              <label className="block font-semibold mb-1">Sending from</label>
              <select
                name="origin"
                className="border border-gray-300 p-2 w-full rounded-lg"
              >
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Zimbabwe</option>
                <option>South Africa</option>
                <option>Canada</option>
              </select>
            </div>

            {/* Delivering To */}
            <div>
              <label className="block font-semibold mb-1">Delivering to</label>
              <select
                name="destination"
                className="border border-gray-300 p-2 w-full rounded-lg"
              >
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Zimbabwe</option>
                <option>South Africa</option>
                <option>Canada</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="border border-gray-300 p-2 w-full rounded-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
            >
              Get Quote
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
