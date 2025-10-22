"use client";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* === Hero Section === */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Nenguva</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Nenguva is a simple, affordable way to send parcels within Zimbabwe
            and to international destinations — connecting you to reliable
            courier partners effortlessly.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-50 transition">
            🎬 Watch Our Story
          </button>
        </div>

        {/* Decorative Image */}
        <div className="absolute inset-0 opacity-10 bg-[url('/images/delivery-bg.jpg')] bg-cover bg-center"></div>
      </section>

      {/* === About Content === */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              How Nenguva Works
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              When you book with us, you choose from our trusted courier
              partners. You can drop your parcel at a local pickup point or have
              it collected from your home or workplace — it’s that simple!
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-blue-600">
              Why We’re Cost-Effective
            </h3>
            <p className="text-lg leading-relaxed">
              By combining multiple customer shipments under one account, we
              create strong "bulk order" discounts that we pass directly on to
              you — helping you save money every time.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Why Choose Nenguva?
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Thousands of individuals, businesses, and online sellers trust
              Nenguva daily. Here’s why our customers love using our service:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✔</span> Some of the lowest delivery prices for Zimbabwe & international shipping.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✔</span> Free collection from your home or workplace.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✔</span> Over 200,000 open and honest reviews.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✔</span> Thousands of drop-off options across the country.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Get Quote Section === */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6 text-blue-700">
            Get an Instant Quote
          </h3>
          <form
            method="post"
            action="/quotev3.php"
            className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6"
          >
            <div className="text-left">
              <label htmlFor="origin" className="block text-gray-700 mb-2 font-medium">
                Collect From
              </label>
              <select
                name="origin"
                id="origin"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="230">Zimbabwe</option>
                <option value="219">United Kingdom</option>
                <option value="221">USA</option>
                <option value="12">Australia</option>
                <option value="36">Canada</option>
              </select>
            </div>

            <div className="text-left">
              <label htmlFor="destination" className="block text-gray-700 mb-2 font-medium">
                Delivering To
              </label>
              <select
                name="destination"
                id="destination"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
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
              className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              🚀 Get Quote
            </button>
          </form>
        </div>
      </section>

      {/* === Footer Padding Space === */}
      <div className="py-12"></div>
    </div>
  );
};

export default AboutUs;
