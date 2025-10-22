"use client";
import React from "react";

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
          <h3 className="text-3xl font-bold mb-6">
            Get an Instant Quote 🚀
          </h3>
          <form
            method="post"
            action="/quotev3.php"
            className="max-w-xl mx-auto bg-white text-gray-800 rounded-2xl shadow-2xl p-8 space-y-6"
          >
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
                <option value="230">Zimbabwe</option>
                <option value="219">United Kingdom</option>
                <option value="221">USA</option>
                <option value="12">Australia</option>
                <option value="36">Canada</option>
              </select>
            </div>

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
                <option value="219">United Kingdom</option>
                <option value="221">USA</option>
                <option value="12">Australia</option>
                <option value="36">Canada</option>
                <option value="230">Zimbabwe</option>
              </select>
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
