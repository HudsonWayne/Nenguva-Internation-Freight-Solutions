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
    <footer className="bg-[#37004b] text-white text-sm">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-12">
        {/* Navigation */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            {navLinks1.map((link, idx) => (
              <a key={idx} href="#" className="hover:underline">
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {navLinks2.map((link, idx) => (
              <a key={idx} href="#" className="hover:underline">
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Info Block */}
        <div className="flex flex-col gap-4 text-sm">
          <p>
            Parcel Monkey allows businesses and individuals to compare quotes for cheap courier services for deliveries
            within the UK, European and Worldwide destinations.
          </p>
          <p>
            We use reputable couriers such as DHL, DPD, Parcelforce, DX, CitySprint and others to offer a variety of next day,
            premium, economy, door to door, collection and drop-off courier services at the cheapest shipping rates.
          </p>
          <p>
            Rated &apos;Great&apos; based on 79,000+ customer reviews on TrustPilot.
          </p>

          {/* Logos */}
          <div className="flex items-center gap-6 pt-4 flex-wrap">
            <Image src="/logos/trustpilot.png" alt="Trustpilot" width={100} height={30} />
            <Image src="/logos/ecologi.png" alt="Ecologi" width={100} height={30} />
            <Image src="/logos/what3words.png" alt="What3Words" width={40} height={40} />
          </div>
        </div>
      </div>

      {/* Country Selector */}
      <div className="bg-[#f6f6f6] text-gray-800 py-4 text-center">
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {countries.map((country, idx) => (
            <span
              key={idx}
              className={`cursor-pointer ${
                country === "United Kingdom" ? "font-bold underline" : ""
              }`}
            >
              {country}
            </span>
          ))}
        </div>
      </div>

      {/* Legal Footer */}
      <div className="bg-white text-gray-600 text-xs text-center py-4 px-4 border-t">
        <p className="mb-2">
          Copyright © Parcel Monkey Ltd 2025 | Company No. 070979496 | VAT No. 981509987
        </p>
        <div className="flex flex-wrap justify-center gap-4">
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
