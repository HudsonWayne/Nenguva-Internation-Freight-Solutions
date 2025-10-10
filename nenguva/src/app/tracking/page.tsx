"use client";

import Link from "next/link";

export default function TrackingPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-8">
        Parcel Tracking
      </h1>

      {/* Tracking Form Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-12">
        <p className="text-gray-700 mb-4">
          To track a parcel, please enter your courier tracking reference or PM booking number into the Parcel Monkey tracking tool below.
        </p>

        <form action="#" method="POST" className="space-y-4">
          <input
            type="text"
            name="tracking"
            placeholder="PM_#######_#######"
            className="w-full border rounded-md px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold text-lg transition duration-200"
          >
            Track Now
          </button>
        </form>
      </div>

      {/* How to Track Section */}
      <section>
        <h2 className="text-xl md:text-2xl font-bold text-purple-800 mb-4">
          How to track a parcel
        </h2>

        <p className="text-gray-700 mb-4">
          Tracking your Parcel Monkey order is easy, just use your full PM order number located on your Parcel Monkey account. 
          Enter this into the tracking tool above to see where your parcel is. You can also find it on your email confirmation 
          as well as the shipping label if you wanted to take a note before you send a parcel.
        </p>

        <p className="text-gray-700 mb-4">
          Whether you have had your item collected or dropped it off, you can use this tool to follow the parcels progress 
          through the courier network. You can share this number with the recipient too, so that they can also monitor the 
          movement of the package while it is in transit with the delivery company.
        </p>

        <p className="text-gray-700 mb-4">
          If your item is time sensitive or due to arrive by a certain time you’ll want to keep tabs on its delivery so we 
          offer tracking with all our courier services, including domestic and international.
        </p>

        <p className="text-gray-700">
          Need help tracking a parcel?{" "}
          <Link href="/contactus4.php" className="text-purple-800 underline hover:text-purple-900">
            Get in touch
          </Link>{" "}
          and we will be happy to help.
        </p>
      </section>
    </div>
  );
}
