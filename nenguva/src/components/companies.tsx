// pages/index.js
import Image from 'next/image';

const deliveryCompanies = [
  { name: "UPS", logo: "/logos/ups.png" },
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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {deliveryCompanies.map((company, idx) => (
          <div
            key={idx}
            className="w-36 h-36 flex items-center justify-center bg-gray-50 shadow-sm rounded-md"
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
