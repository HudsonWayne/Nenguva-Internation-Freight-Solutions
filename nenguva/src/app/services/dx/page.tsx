"use client";

import Link from "next/link";

export default function Dx() {
  return (
    <main className="bg-gradient-to-b from-purple-50 to-white text-gray-900 min-h-screen">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 p-4 md:px-20">
        <Link href="/" className="hover:text-purple-700">Home</Link>{" "} &gt;{" "}
        <Link href="/services" className="hover:text-purple-700">Couriers</Link>{" "} &gt;{" "}
        <span className="text-purple-700 font-medium">DX</span>
      </nav>

      {/* Header */}
      <section className="px-6 md:px-20 py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-6">
          DX delivery services
        </h1>

        <p className="text-gray-700 leading-relaxed mb-8">
          For customers looking to save money on UK parcel delivery and UK freight services,
          booking a DX delivery via Parcel Monkey is the ideal solution. You can book a courier
          collection from your home or work address and have your parcel or freight delivered
          the very next day, all for a discounted price.
        </p>

        <h2 className="text-2xl font-bold text-purple-800 mb-4">
          We offer two great DX delivery services:
        </h2>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><strong>DX Next Day</strong> – for parcels up to 25kg</li>
          <li><strong>DX Freight</strong> – a next day service for palletised items over 25kg</li>
        </ul>

        <p className="mt-4 text-red-600 font-medium">
          Please note DX Freight is not a two-man delivery service. It will be one driver for
          collection and delivery so you may need to assist the driver with heavy goods.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 md:px-20 mb-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-200">
            <h3 className="text-xl font-bold text-purple-800">DX Next Day</h3>
            <p className="mt-2 text-gray-600">From only: £8.99 exc VAT</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-200">
            <h3 className="text-xl font-bold text-purple-800">DX Freight Next Day</h3>
            <p className="mt-2 text-gray-600">From only: £45.11 exc VAT</p>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="px-6 md:px-20 py-10 bg-purple-50 rounded-t-3xl">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">Book a DX courier</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Booking a DX courier through Parcel Monkey is easy. Just follow these simple steps to
          get an instant quote and book:
        </p>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Package your item.</li>
          <li>Weigh and measure your packaged item.</li>
          <li>Enter the dimensions and weight into our courier quote tool.</li>
          <li>Select the DX delivery service you require and book.</li>
          <li>Confirm your collection and delivery address and select a collection date.</li>
          <li>Declare the contents and value of your item. Select any additional protection cover required (up to £1000).</li>
          <li>Confirm and book, then pay for your service.</li>
        </ul>

        <p className="mt-6 text-gray-700">
          A DX courier will arrive on the day of your choice, with a delivery address label to be
          attached to the box (ideal for customers who don't have a printer). Please check the
          delivery address on the label is correct. The DX driver will then request a signature
          confirming collection. From here your item will be taken to a DX Depot, sorted and
          dispatched to be delivered the Next Day - simple!
        </p>
      </section>

      {/* Tracking */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">DX tracking</h2>
        <p className="text-gray-700">
          Even though you are placing the order for a DX Courier to come and collect your parcel
          via Parcel Monkey, you can still track your shipment every step of the way.
        </p>
      </section>

      {/* Reviews */}
      <section className="px-6 md:px-20 py-10 bg-white">
        <h2 className="text-2xl font-bold text-purple-800 mb-6">Customer Reviews</h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div className="p-6 rounded-xl border shadow">
            <p className="text-yellow-400 text-lg mb-2">⭐⭐⭐⭐⭐</p>
            Excellent service from Parcel Monkey
          </div>

          <div className="p-6 rounded-xl border shadow">
            <p className="text-yellow-400 text-lg mb-2">⭐⭐⭐⭐⭐</p>
            Mostly good, but frustrating that in the address areas you can't put special symbols like - or /.
          </div>

          <div className="p-6 rounded-xl border shadow">
            <p className="text-yellow-400 text-lg mb-2">⭐⭐⭐⭐⭐</p>
            That caused a lot of problems with collection and delivery
          </div>
        </div>
      </section>
    </main>
  );
}
