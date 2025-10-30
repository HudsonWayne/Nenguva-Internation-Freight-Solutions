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

      {/* Tracking Section */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">DX tracking</h2>

        <p className="text-gray-700 mb-4">
          Even though you are placing the order for a DX Courier to come and collect your parcel via Parcel Monkey,
          you can still get access to all the DX delivery tracking, allowing you to follow your parcel until it
          arrives with the recipient.
        </p>

        <p className="text-gray-700 mb-4">
          You can <strong>track your parcel using the PM order number</strong> provided at the time of booking
          from your Parcel Monkey account or via the Tracking tab on our homepage.
        </p>

        <Link href="#" className="text-purple-700 font-medium hover:underline">
          Find out more about DX tracking
        </Link>

        {/* DX Delivery Times Box */}
        <div className="mt-10 bg-purple-100 p-6 rounded-xl border border-purple-200 shadow-sm">
          <h3 className="text-xl font-bold text-purple-800 mb-3">DX delivery times</h3>
          <p className="text-gray-700 mb-4">
            Delivery will be attempted within the Next Working Day after collection, making this an{" "}
            <Link href="#" className="text-purple-700 font-medium hover:underline">expedited courier service</Link>.
          </p>

          <p className="text-gray-700 mb-4">
            We cannot specify an exact time, but the DX courier will arrive between 8am and 6pm.
            You will be able to provide the tracking number to the recipient so they can see when
            the delivery is expected.
          </p>

          <h4 className="text-purple-800 font-semibold mb-2">
            What happens if nobody is at home when the DX courier arrives to deliver the item?
          </h4>
          <p className="text-gray-700">
            The DX courier will either try to post the item, deliver to one of your neighbours or
            find a suitable place to leave it at your address. A calling card will be posted so you
            know where to find the item or how to arrange redelivery if the DX courier has been
            unable to deliver.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-6 md:px-20 py-10 bg-white">
        <h2 className="text-2xl font-bold text-purple-800 mb-6">Customer Reviews</h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div className="p-6 rounded-xl border shadow hover:shadow-lg transition">
            <p className="text-yellow-400 text-lg mb-2">⭐⭐⭐⭐⭐</p>
            Excellent service from Parcel Monkey
          </div>

          <div className="p-6 rounded-xl border shadow hover:shadow-lg transition">
            <p className="text-yellow-400 text-lg mb-2">⭐⭐⭐⭐⭐</p>
            It wasn’t picked up on the promised date so was a day late. Apart from that the service was straightforward.
          </div>

          <div className="p-6 rounded-xl border shadow hover:shadow-lg transition">
            <p className="text-yellow-400 text-lg mb-2">⭐⭐⭐⭐⭐</p>
            Very professional quick service that’s reasonably priced. Would recommend.
          </div>

          <div className="p-6 rounded-xl border shadow hover:shadow-lg transition">
            <p className="text-yellow-400 text-lg mb-2">⭐⭐⭐⭐⭐</p>
            Bang on time. Bang on price.
          </div>

          <div className="p-6 rounded-xl border shadow hover:shadow-lg transition">
            <p className="text-yellow-400 text-lg mb-2">⭐⭐⭐⭐⭐</p>
            They did exactly what they said they would and quicker than they advertised. A breath of fresh air!
          </div>

          <div className="p-6 rounded-xl border shadow hover:shadow-lg transition">
            <p className="text-yellow-400 text-lg mb-2">⭐⭐⭐⭐⭐</p>
            Very reliable. Updated me on status of my parcel, driver was courteous and on time.
          </div>
        </div>
      </section>
    </main>
  );
}
