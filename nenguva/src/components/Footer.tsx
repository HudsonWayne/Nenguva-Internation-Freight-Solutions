import Image from "next/image";

const Footer = () => {
  const navLinks1: string[] = [
    "Home",
    "Get a Parcel Delivery Quote",
    "About Us",
    "Help & Support",
    "Sign Up",
    "Login",
    "Parcel Tracking",
  ];

  const navLinks2: string[] = [
    "Contact Us",
    "Reviews",
    "International Shipping",
    "Courier Companies",
    "Parcel Delivery Services",
    "Marketplace Selling Guides",
    "Retailer Returns",
  ];

  const countries: string[] = [
    "België",
    "Deutschland",
    "España",
    "France",
    "Italia",
    "Nederland",
    "United Kingdom",
    "United States",
  ];

  return (
    <footer className="w-full">
      {/* Top Footer Section */}
      <div className="bg-[#37004b] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              {navLinks1.map((link, idx) => (
                <a key={idx} href="#" className="hover:underline leading-relaxed">
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {navLinks2.map((link, idx) => (
                <a key={idx} href="#" className="hover:underline leading-relaxed">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Divider Line (for medium+ screens) */}
          <div className="hidden md:block border-r border-white/30 h-full mx-auto" />

          {/* Info Block */}
          <div className="flex flex-col gap-4 text-sm w-[500px]">
            <p>
              Parcel Monkey allows businesses and individuals to compare quotes for cheap courier services for deliveries within
              the UK, European and Worldwide destinations.
            </p>
            <p>
              We use reputable couriers such as DHL, DPD, Parcelforce, DX, CitySprint and others to offer a variety of next day,
              premium, economy, door to door, collection and drop-off courier services at the cheapest shipping rates.
            </p>
            <p>
              Rated Great based on 79,000+ customer reviews on TrustPilot.
            </p>

            {/* Logos Section */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Image src="/logos/trustpilot.png" alt="Trustpilot" width={140} height={40} />
              <Image src="/logos/ecologi.png" alt="Ecologi" width={100} height={40} />
              <Image src="/logos/what3words.png" alt="What3Words" width={60} height={60} />
            </div>
          </div>
        </div>
      </div>

      {/* Country Selector */}
      <div className="bg-[#f6f6f6] text-gray-800 py-4 text-sm text-center">
        <div className="flex flex-wrap justify-center gap-4">
          {countries.map((country, idx) => (
            <span
              key={idx}
              className={`cursor-pointer ${
                country === "United Kingdom" ? "font-semibold underline" : ""
              }`}
            >
              {country}
            </span>
          ))}
        </div>
      </div>

      {/* Legal Footer Section */}
      <div className="bg-white text-gray-600 text-xs text-center py-4 border-t">
        <p className="mb-1">
          Copyright © Parcel Monkey Ltd 2025 | Company No. 070979496 | VAT No. 981509987
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-1">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Careers
          </a>
          <a href="#" className="hover:underline">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
