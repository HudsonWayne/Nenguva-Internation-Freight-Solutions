"use client";
import React from "react";

// 🌍 List of all countries
const countries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia",
  "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium",
  "Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria",
  "Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad",
  "Chile","China","Colombia","Comoros","Congo (Brazzaville)","Congo (Kinshasa)","Costa Rica","Croatia",
  "Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt",
  "El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France",
  "Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau",
  "Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel",
  "Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos",
  "Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar",
  "Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico",
  "Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia",
  "Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea",
  "North Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru",
  "Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis",
  "Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe",
  "Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia",
  "Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan",
  "Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste",
  "Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine",
  "United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu",
  "Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
];

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* === Hero Section === */}
      <section className="relative bg-gradient-to-r from-[#004aad] to-[#ff914d] text-white py-20 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            About Nenguva
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Nenguva makes parcel delivery fast, affordable, and effortless.
            Compare trusted couriers, book instantly, and track your delivery —
            all in one platform built for Zimbabwe and beyond.
          </p>
          <button className="bg-white text-[#004aad] font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-50 hover:scale-105 transition transform">
            🎬 Watch Our Story
          </button>
        </div>

        {/* Faint background image overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('/images/delivery-bg.jpg')] bg-cover bg-center"></div>
      </section>

      {/* === Main About Section === */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-[#004aad]">
              How Nenguva Works
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              When you book with us, you select which of our partner couriers
              will handle your parcel. Drop it off at a nearby pickup point or
              have it collected from your home or business — it’s simple and
              efficient!
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-[#ff914d]">
              Why We’re Cost-Effective
            </h3>
            <p className="text-lg leading-relaxed">
              We combine all customer shipments into group bookings, giving us
              strong buying power with couriers. Those savings are passed
              directly to you — helping you send parcels for less.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#004aad]">
              Why Choose Nenguva?
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Thousands of individuals, online sellers, and businesses rely on
              Nenguva daily. Here’s why our customers love using us:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-[#ff914d] mr-3 text-xl">✔</span> Some of
                the lowest parcel delivery rates locally and internationally.
              </li>
              <li className="flex items-start">
                <span className="text-[#ff914d] mr-3 text-xl">✔</span> Free
                collection from your home or workplace.
              </li>
              <li className="flex items-start">
                <span className="text-[#ff914d] mr-3 text-xl">✔</span> Thousands
                of satisfied customers and transparent reviews.
              </li>
              <li className="flex items-start">
                <span className="text-[#ff914d] mr-3 text-xl">✔</span> Drop-off
                locations available nationwide.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Get Quote Section === */}
      <section className="bg-gradient-to-r from-[#004aad] to-[#ff914d] py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Get an Instant Quote 🚀</h3>
          <form
            method="post"
            action="/quotev3.php"
            className="max-w-xl mx-auto bg-white text-gray-800 rounded-2xl shadow-2xl p-8 space-y-6"
          >
            {/* Collect From */}
            <div className="text-left">
              <label
                htmlFor="origin"
                className="block text-gray-700 mb-2 font-semibold"
              >
                Collect From
              </label>
              <select
                name="origin"
                id="origin"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#004aad] focus:outline-none"
              >
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Delivering To */}
            <div className="text-left">
              <label
                htmlFor="destination"
                className="block text-gray-700 mb-2 font-semibold"
              >
                Delivering To
              </label>
              <select
                name="destination"
                id="destination"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#004aad] focus:outline-none"
              >
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Parcel Weight */}
            <div className="text-left">
              <label
                htmlFor="weight"
                className="block text-gray-700 mb-2 font-semibold"
              >
                Parcel Weight (kg)
              </label>
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Enter weight"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#004aad] focus:outline-none"
                min={0.1}
                step={0.1}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#004aad] to-[#ff914d] text-white py-3 rounded-full font-semibold shadow-md hover:scale-105 transition transform"
            >
              Get Quote
            </button>
          </form>
        </div>
      </section>

      {/* === Footer Padding === */}
      <div className="py-12"></div>
    </div>
  );
};

export default AboutUs;
