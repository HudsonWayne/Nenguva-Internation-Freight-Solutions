"use client";

import { useState } from "react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("uk");
  const [dimensionsOption, setDimensionsOption] = useState("later");

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
    "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
    "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China",
    "Colombia", "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
    "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
    "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
    "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
    "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
    "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
    "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
    "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
    "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama",
    "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
    "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
    "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
    "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
    "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
    "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-purple-700 to-purple-800 text-white py-10 px-6 shadow-xl overflow-hidden">
      <div className="text-center max-w-4xl mx-auto">
        {/* Heading */}
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
          {/* Collect From */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Collect from
            </label>
            <select className="w-full border border-gray-300 px-3 py-2">
              {countries.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </select>
          </div>

          {/* Delivering To */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Delivering to
            </label>
            <select className="w-full border border-gray-300 px-3 py-2">
              {countries.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </select>
          </div>

          {/* Parcel Weight */}
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

          {/* Dimensions Option */}
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
                  checked={dimensionsOption === "later"}
                  onChange={() => setDimensionsOption("later")}
                />{" "}
                later
              </label>
              <label className="flex items-center gap-1 text-sm">
                <input
                  type="radio"
                  name="dimensions"
                  value="now"
                  checked={dimensionsOption === "now"}
                  onChange={() => setDimensionsOption("now")}
                />{" "}
                now
              </label>
            </div>
          </div>

          {/* Dimensions Fields */}
          {dimensionsOption === "now" && (
            <>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Length:
                </label>
                <input
                  type="text"
                  placeholder="Eg. 1"
                  className="w-full border border-gray-300 px-3 py-2"
                />
                <span className="text-sm text-gray-500">cm</span>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Width:
                </label>
                <input
                  type="text"
                  placeholder="Eg. 1"
                  className="w-full border border-gray-300 px-3 py-2"
                />
                <span className="text-sm text-gray-500">cm</span>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Height:
                </label>
                <input
                  type="text"
                  placeholder="Eg. 1"
                  className="w-full border border-gray-300 px-3 py-2"
                />
                <span className="text-sm text-gray-500">cm</span>
              </div>
            </>
          )}

          <button
            type="submit"
            className="sm:col-span-4 bg-green-500 text-white py-3 font-semibold hover:bg-green-600 mt-4"
          >
            Get Quote
          </button>
        </form>

        {/* Footer Links */}
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
