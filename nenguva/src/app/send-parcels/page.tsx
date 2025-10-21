"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SendParcels() {
  const [parcelCount, setParcelCount] = useState(1);
  const router = useRouter();

  const handleProceed = () => {
    router.push("/comparison"); // ✅ Goes to comparison page
  };

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde",
    "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China",
    "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba",
    "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
    "Eswatini (Swaziland)", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia",
    "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
    "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
    "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
    "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
    "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
    "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State",
    "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
    "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan",
    "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
    "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
    "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
    "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  return (
    <div className="w-[90%] mx-auto my-10 p-6">
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
      <div className="bg-purple-50 p-6 rounded-xl shadow-md mb-6 border border-purple-200">
        <h2 className="font-semibold text-purple-800 mb-4 text-lg">
          Where is your parcel going?
        </h2>

        <div className="mb-4">
          <label className="block font-semibold text-purple-700 mb-1">
            Sending from
          </label>
          <select
            className="border border-purple-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            defaultValue="United Kingdom"
          >
            {countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-semibold text-purple-700 mb-1">
            Delivering to
          </label>
          <select
            className="border border-purple-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            defaultValue="United States"
          >
            {countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
        </div>

        <p className="text-gray-700 mb-2 text-sm">
          We’ll send you confirmation of your order and labels (where required).
        </p>

        <div>
          <label className="block font-semibold text-purple-700 mb-1">
            Your Email
          </label>
          <input
            type="email"
            placeholder="myname@example.com"
            className="border border-purple-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Parcel Dimensions Section */}
      {[...Array(parcelCount)].map((_, index) => (
        <div
          key={index}
          className="bg-green-50 p-6 rounded-xl shadow-sm mb-4 border border-green-200"
        >
          <h3 className="font-semibold text-green-800 mb-4">
            Parcel {index + 1}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className="block font-semibold text-green-700 mb-1">
                Length *
              </label>
              <input
                type="number"
                placeholder="cm"
                className="border border-green-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block font-semibold text-green-700 mb-1">
                Width *
              </label>
              <input
                type="number"
                placeholder="cm"
                className="border border-green-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block font-semibold text-green-700 mb-1">
                Height *
              </label>
              <input
                type="number"
                placeholder="cm"
                className="border border-green-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block font-semibold text-green-700 mb-1">
                Weight *
              </label>
              <input
                type="number"
                placeholder="kg"
                className="border border-green-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Add/Remove Parcel Buttons */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setParcelCount(parcelCount + 1)}
          className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded text-sm transition"
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

      {/* ✅ Proceed Button (Now navigates to /comparison) */}
      <button
        onClick={handleProceed}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg mb-10 transition"
      >
        Proceed
      </button>

      {/* Why Choose Section */}
      <div className="bg-gray-50 rounded-2xl p-10 mt-12 shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">
          Why choose Parcel Monkey?
        </h2>

        <div className="space-y-8 text-gray-800 leading-relaxed max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">Save time</h3>
            <p>
              Save yourself time by comparing couriers online using our parcel
              delivery, quick quote tool. There is no need to spend hours
              looking for the best parcel post prices as we can do this for you
              in just a couple of clicks.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">Save money</h3>
            <p>
              If you are looking for cheap parcel delivery then we can help you
              book in your parcel for an affordable price. Due to the volumes of
              parcel shipping we do, we have the advantage of lower shipping
              costs which we pass on to our customers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">Choice</h3>
            <p>
              We work with well known couriers so that no matter what type of
              delivery service you need, we can help. If you need the cheapest
              or the fastest delivery service around, you can compare parcel
              delivery quotes and book a courier online in minutes.
            </p>
            <p className="mt-3">
              We offer everything from large parcel delivery to international
              shipping, whilst you can book a collection from your home or work,
              or one of our Drop Off options.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">
              Door to door fully tracked delivery
            </h3>
            <p>
              When you book a courier service with Parcel Monkey you will be
              provided with full tracking so that you can follow your parcel
              until it is delivered. You can also share this with the recipient
              so they too can monitor the parcel’s movement.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">
              Sending something valuable?
            </h3>
            <p>
              Why not add protection cover to your booking? Some of our courier
              services come with
              <span className="font-semibold text-gray-900">
                {" "}
                £20 FREE protection cover{" "}
              </span>
              and we offer extended liability up to the value of
              <span className="font-semibold text-gray-900"> £1000 </span>
              for those more expensive shipments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
