// pages/index.js
import Image from 'next/image';

const deliveryCompanies = [
  { name: "UPS", logo: "/public\FedEx.jpg" },
  { name: "ParcelForce", logo: "/logos/parcelforce.png" },
  { name: "DPD", logo: "/logos/dpd.png" },
  { name: "FedEx", logo: "/logos/fedex.png" },
  { name: "DHL", logo: "/logos/dhl.png" },
  { name: "Evri", logo: "/logos/evri.png" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-medium text-gray-800 mb-10 text-center">
        Send your parcel with trusted delivery companies
      </h1>

      {/* Horizontal scrollable row */}
      <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center items-center mb-12 overflow-x-auto px-4">
        {deliveryCompanies.map((company, idx) => (
          <div
            key={idx}
            className="w-36 h-36 flex items-center justify-center bg-gray-50 shadow-sm rounded-md flex-shrink-0"
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={100}
              height={60}
              objectFit="contain"
            />
          </div>
        ))}
      </div>

      <a
        href="#"
        className="text-purple-800 text-lg underline underline-offset-4 hover:text-purple-600 transition"
      >
        Browse delivery companies
      </a>
    </div>
  );
}
