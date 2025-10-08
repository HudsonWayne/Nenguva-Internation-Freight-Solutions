import Image from "next/image";

const deliveryCompanies = [
  { name: "FedEx", logo: "/FedEx.jpg" },
  { name: "UPS", logo: "/Ups.jpg" },
  { name: "Two", logo: "/Two.jpg" },
  { name: "FedEx", logo: "/FedEx.jpg" },
  { name: "UPS", logo: "/Ups.jpg" },
  { name: "Two", logo: "/Two.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white overflow-hidden px-4 py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-800 mb-10 text-center">
        Send your parcel with trusted delivery companies
      </h1>

      {/* Responsive delivery companies row */}
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-12 w-full">
        {deliveryCompanies.map((company, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center bg-gray-50 shadow-sm rounded-md 
                       w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48"
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={120}
              height={80}
              className="object-contain"
              priority
            />
          </div>
        ))}
      </div>

      <a
        href="#"
        className="text-purple-800 text-base sm:text-lg md:text-xl lg:text-2xl underline underline-offset-4 hover:text-purple-600 transition"
      >
        Browse delivery companies
      </a>
    </div>
  );
}
