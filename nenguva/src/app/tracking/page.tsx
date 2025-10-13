"use client";

import Link from "next/link";

export default function TrackingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-3xl font-bold text-purple-800 mb-4">
          Parcel Tracking
        </h1>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Track your parcel below and understand the meaning of various tracking
          statuses. If you experience any issues with delivery, our customer
          support team will be happy to help.
        </p>

        {/* Tracking input */}
        <div className="bg-white rounded-2xl shadow p-6 mb-10">
          <form className="flex flex-col md:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Enter your tracking number (e.g. PM_#######_#######)"
              className="w-full md:flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-purple-800"
            >
              Track Now
            </button>
          </form>
        </div>

        {/* Common Tracking Statuses */}
        <section className="bg-white rounded-2xl shadow p-8 mb-10">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Common Tracking Statuses
          </h2>
          <p className="text-gray-700 mb-6">
            Depending on which courier you choose to book, you might see
            different tracking terms used. Express services often come with more
            tracking updates than tracked mail or economy ones.
          </p>
          <p className="text-gray-700 mb-6">
            Listed below are a few statuses you might see. If you are having any
            issues with a delivery, get in touch and our customer support team
            will be happy to help.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Advised</strong> — When the courier has the parcel details
              in their system, the tracking will state “Advised”. Once the item
              enters the network, it will be scanned and change to “In
              progress”.
            </li>
            <li>
              <strong>Address problem</strong> — If the courier cannot locate
              the delivery address, contact us with additional details so we can
              forward them and ensure successful delivery.
            </li>
            <li>
              <strong>Returned to sender</strong> — The courier was unable to
              deliver your parcel, so it’s being returned. There are several
              reasons this may happen.
            </li>
            <li>
              <strong>Delivery attempted</strong> — The driver tried to deliver
              your parcel but couldn’t get a signature. They’ll leave a card
              explaining what to do next.
            </li>
            <li>
              <strong>In progress</strong> — The parcel has entered the network
              and is being processed. This will change to “Delivered” once it’s
              complete.
            </li>
            <li>
              <strong>Prepared for delivery</strong> — The parcel is loaded into
              the vehicle and en route to the recipient.
            </li>
            <li>
              <strong>Delivered</strong> — The parcel has arrived and has been
              signed for by the recipient.
            </li>
          </ul>
        </section>

        {/* International Tracking */}
        <section className="bg-white rounded-2xl shadow p-8 mb-10">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            International Tracking
          </h2>
          <p className="text-gray-700 mb-6">
            International deliveries outside the EU may take longer due to
            Customs clearance and extended distances. These parcels often have
            more tracking scans as more handling is required.
          </p>
          <p className="text-gray-700 mb-6">
            Always provide a working local contact number for the recipient to
            ensure fast and smooth delivery.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Waiting Customs Clearance</strong> — All parcels sent are
              DDU, meaning the recipient must pay any Customs Duty owed before
              delivery. You may see this status if Customs are evaluating the
              parcel. The recipient will be contacted for payment.
            </li>
          </ul>
        </section>

        {/* Delivery Exceptions */}
        <section className="bg-white rounded-2xl shadow p-8 mb-10">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Delivery Exceptions — Why hasn’t my parcel been delivered?
          </h2>
          <p className="text-gray-700 mb-6">
            These are common reasons a shipment delivery might be delayed (also
            known as an “exception”). Check your tracking status and contact us
            if you have any questions — we’re happy to help.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>The recipient was not there to accept the delivery.</li>
            <li>
              There has been a problem with transportation, causing a temporary
              delay.
            </li>
            <li>
              Your parcel is being held at Customs (non-EU shipments only).
            </li>
            <li>
              The shipment is traveling to a remote area and the transit time is
              longer than expected.
            </li>
            <li>
              Your package has been sent to a different sorting facility and has
              incurred a delay.
            </li>
            <li>The sender provided incorrect address details.</li>
          </ul>
        </section>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-4 justify-center mt-10 text-purple-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/send-parcels">Get a Parcel Delivery Quote</Link>
          <Link href="/about">About Us</Link>
          <Link href="/help">Help & Support</Link>
          <Link href="/register.php">Sign Up</Link>
          <Link href="/login.php">Login</Link>
          <Link href="/tracking">Parcel Tracking</Link>
          <Link href="/contactus4.php">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
