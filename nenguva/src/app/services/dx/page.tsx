"use client";

import Link from "next/link";
import { FaTruck, FaGlobe, FaBoxOpen, FaMapMarkerAlt } from "react-icons/fa";

export default function Dpd() {
  const countries = [
    "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua & Barbuda","Argentina","Armenia","Australia","Austria",
    "Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan",
    "Bolivia","Bosnia & Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia",
    "Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica",
    "Croatia","Cuba","Cyprus","Czech Republic","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador",
    "Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France",
    "Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau",
    "Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland",
    "Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait",
    "Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
    "Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico",
    "Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru",
    "Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman",
    "Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
    "Qatar","Romania","Russia","Rwanda","Saint Kitts & Nevis","Saint Lucia","Saint Vincent & the Grenadines","Samoa","San Marino","Sao Tome & Principe",
    "Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia",
    "South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria",
    "Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey",
    "Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu",
    "Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
  ];

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
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-8">
          DX Delivery - Affordable Next Day Courier Services
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-purple-200 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold text-purple-800 mb-6">
              Services available from just{" "}
              <span className="text-green-600 text-3xl font-bold">£8.99 </span>{" "}
              <span className="text-gray-500 text-base">exc VAT</span>
            </h2>

            <ul className="space-y-3 text-lg text-gray-700">
              {[
                "Collected from your home or work between 8 am and 6 pm",
                "Send parcels up to 25kg",
                "Express delivery times",
                "Send up to 20kg",
                "DPD live tracking",
                "Choose your delivery day/slot via the DPD App",
                "FREE £20 loss/damage cover included",
                "Optional protection cover available up to £1000",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-green-600 text-xl mr-2">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Quote Box */}
          <div className="bg-purple-900 text-white rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex justify-between mb-6">
              <button className="text-lg font-semibold border-b-2 border-green-400 pb-1">
                Parcel Delivery
              </button>
              <button className="text-lg font-semibold opacity-70">
                ParcelMonkey<span className="text-green-400"> Local</span>
              </button>
            </div>

            <h2 className="text-xl font-semibold mb-4">Get an Instant Quote</h2>

            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Collect from</label>
                <select className="w-full p-2 text-black rounded shadow-inner">
                  {countries.map((country) => (
                    <option key={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm">Delivering to</label>
                <select className="w-full p-2 text-black rounded shadow-inner">
                  {countries.map((country) => (
                    <option key={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm">Parcel Weight</label>
                <div className="flex">
                  <input
                    type="number"
                    placeholder="Enter weight"
                    className="flex-grow p-2 text-black rounded-l border border-gray-300"
                  />
                  <span className="bg-purple-700 px-3 flex items-center rounded-r text-white font-semibold">
                    Kg
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-purple-900 font-bold py-3 rounded mt-6 shadow-lg transition-colors duration-300"
              >
                Get Quote & Book
              </button>
            </form>

            <div className="mt-6 text-sm space-y-2 text-purple-200">
              <p>📦 Send multiple parcels</p>
              <p>📏 Parcel larger than 1m?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-6 px-6 md:px-20 pb-10">
        <button className="bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-3 px-8 rounded shadow-md transition-transform transform hover:scale-105 flex items-center gap-2 justify-center">
          <FaTruck /> Track your DPD delivery here
        </button>
        <button className="bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 text-white font-semibold py-3 px-8 rounded shadow-md transition-transform transform hover:scale-105 flex items-center gap-2 justify-center">
          <FaMapMarkerAlt /> DPD Drop Off Locations
        </button>
      </div>

      {/* Quick Links */}
      <section className="bg-yellow-50 px-6 md:px-20 py-10 rounded-t-3xl">
        <h3 className="text-xl font-semibold mb-4 text-purple-800">Quick Links</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-purple-800 underline">
          {[
            "About DPD",
            "DPD UK delivery services",
            "DPD international shipping",
            "DPD drop off services",
            "DPD track and trace",
            "DPD restrictions",
            "DPD delivery times",
          ].map((link) => (
            <li key={link}>
              <Link href="#" className="hover:text-purple-600 transition-colors duration-200">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Services Info */}
      <section className="px-6 md:px-20 py-10 space-y-12">
        {[{
          title: "DPD courier services",
          content: "DPD offer a reliable delivery service to destinations around the world, as well as an excellent UK domestic service. Handling 2 million parcels every day, they regularly top customer satisfaction surveys for their excellent services levels. If you want to reach customers, friends or family around the globe for less, then you can book DPD services at a discounted rate via Parcel Monkey. You'll still have access to their brilliant tracking tool, be able to add protection cover and choose from a range of collection and drop off services, including DPD Drop Off, DPD Classic and DPD Express.",
          icon: <FaGlobe />
        },{
          title: "DPD UK delivery services",
          content: "For those who need to send a parcel domestically within the UK, we offer discounted drop-off and collection services with DPD. Our DPD Pick Up service allows you to drop off your parcel at any DPD Pick Up point and will deliver your parcel in 1-2 days. DPD Next Day Collected includes a courier collection from your home or work address and will deliver your parcel the working day after collection.",
          icon: <FaBoxOpen />
        },{
          title: "International shipping with DPD",
          content: "DPD offer affordable delivery services out of the UK to international destinations. You can send your items to major destinations in Europe in 3-5 working days, whilst if you are sending a parcel out of the EU, it can be delivered safely in approximately 3-7 working days. Parcel Monkey collect all the relevant information in the booking process for Customs, and these documents are sent to DPD using a paperless process, so if you need to send a parcel overseas with DPD all you need to print out is the shipping label.",
          icon: <FaGlobe />
        },{
          title: "Drop off a parcel with DPD Pickup",
          content: "Our DPD Pickup shops provide a handy alternative to having a parcel collected from your home or work. Simply drop off your parcel at your nearest DPD Pickup store and your parcel will be delivered within 1-2 working days.",
          icon: <FaMapMarkerAlt />
        }].map((service) => (
          <div key={service.title} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex gap-4">
            <div className="text-purple-700 text-3xl">{service.icon}</div>
            <div>
              <h2 className="text-2xl font-bold text-purple-800 mb-3">{service.title}</h2>
              <p className="text-gray-700 leading-relaxed">{service.content}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Customer Reviews */}
      <section className="px-6 md:px-20 py-10 bg-white">
        <h2 className="text-2xl font-bold text-purple-800 mb-6">Customer Reviews</h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          {[
            "Collected parcel on time and delivered well within stipulated days .. never any problems.",
            "Prompt delivery no problems parcel left as requested with neighbour.",
            "Very impressed with all the process. Posted at 3.40 pm. Delivered by 11.15 next day. Can't argue with that!"
          ].map((review, index) => (
            <div key={index} className="p-6 rounded-xl border shadow hover:shadow-xl transition-shadow duration-300">
              <div className="text-yellow-400 text-lg mb-2">⭐⭐⭐⭐⭐</div>
              <p>{review}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
