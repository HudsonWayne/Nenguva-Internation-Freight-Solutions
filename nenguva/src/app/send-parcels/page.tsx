"use client";

import { useState } from "react";

export default function SendParcels() {
  const [parcelCount, setParcelCount] = useState(1);

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
    "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
    "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
    "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (Swaziland)", "Ethiopia", "Fiji", "Finland",
    "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala",
    "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India",
    "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
    "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
    "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua",
    "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
    "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
    "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
    "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka",
    "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
    "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
    "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
    "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen", "Zambia", "Zimbabwe"
  ];

  return (
    <div className="w-[100%] mx-auto my-10 p-6">
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
              {countries.map((country) => (
                <option key={country}>{country}</option>
              ))}
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
              defaultValue="United States"
            >
              {countries.map((country) => (
                <option key={country}>{country}</option>
              ))}
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
        <div key={index} className="bg-gray-100 p-5 rounded-lg shadow-sm mb-4">
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
