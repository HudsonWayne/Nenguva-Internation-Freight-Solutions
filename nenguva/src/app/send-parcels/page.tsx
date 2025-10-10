"use client";

import { useState } from "react";

export default function SendParcels() {
  const [parcelCount, setParcelCount] = useState(1);

  return (
    <div className="max-w-3xl mx-auto my-10 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-2 text-gray-800">
        <span className="text-purple-700">Courier</span> Quote{" "}
        <span className="font-semibold">Comparison</span>
      </h1>
      <p className="text-gray-700 mb-2">
        It is really easy to find and compare cheap parcel delivery prices using
        our courier service quote engine.
      </p>
      <p className="text-gray-700 mb-6">
        Just let us know where you want to send a parcel to and provide the
        dimensions of your box and we will find you the best parcel delivery
        quotes with a reliable delivery company.
      </p>

      {/* Sender/Receiver Form */}
      <div className="bg-gray-100 p-5 rounded-lg shadow-sm mb-6">
        <h2 className="font-semibold text-gray-800 mb-2">
          Where is your parcel going?
        </h2>

        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-1">
            Sending from
          </label>
          <div className="flex items-center">
            <select
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              defaultValue="United Kingdom"
            >
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Zimbabwe</option>
              <option>Australia</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-1">
            Delivering to
          </label>
          <div className="flex items-center">
            <select
              className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              defaultValue="United Kingdom"
            >
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Zimbabwe</option>
              <option>Australia</option>
            </select>
          </div>
        </div>

        <p className="text-gray-600 mb-2 text-sm">
          We will like to send you confirmation of your order and labels (where
          required). Please enter your email address below:
        </p>

        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Your Email
          </label>
          <input
            type="email"
            placeholder="myname@example.com"
            className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
      </div>

      {/* Parcel Dimensions Section */}
      {[...Array(parcelCount)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-100 p-5 rounded-lg shadow-sm mb-4"
        >
          <h3 className="font-semibold text-gray-800 mb-4">
            Parcel {index + 1}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Length *
              </label>
              <input
                type="number"
                placeholder="cm"
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Width *
              </label>
              <input
                type="number"
                placeholder="cm"
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Height *
              </label>
              <input
                type="number"
                placeholder="cm"
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Weight *
              </label>
              <input
                type="number"
                placeholder="kg"
                className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Add/Remove Parcel Buttons */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setParcelCount(parcelCount + 1)}
          className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded text-sm"
        >
          Add another parcel
        </button>

        {parcelCount > 1 && (
          <button
            onClick={() => setParcelCount(parcelCount - 1)}
            className="text-purple-700 underline text-sm"
          >
            Remove last parcel
          </button>
        )}
      </div>

      {/* Proceed Button */}
      <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg">
        Proceed
      </button>
    </div>
  );
}
