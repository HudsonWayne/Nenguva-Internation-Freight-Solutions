import Image from "next/image";
import { ArrowRight } from "lucide-react"; // Built-in icon from lucide-react

export default function PopularServices() {
  const services = [
    {
      title: "Next day delivery",
      description:
        "Get a quote for next day delivery for most locations in the UK. We can help you book timed and weekend deliveries too!",
      image: "/nextday.png",
    },
    {
      title: "International",
      description:
        "Send parcels to over 240 destinations worldwide. Compare transit times and prices from a range of trusted international couriers.",
      image: "/international.png",
    },
    {
      title: "Large and heavy parcels",
      description:
        "Find discounted rates to send large and heavy items, including collection services right from your door.",
      image: "/heavy.png",
    },
    {
      title: "Same day delivery",
      description:
        "For those urgent items that just can’t wait. Same day delivery anywhere in the UK for items large and small.",
      image: "/sameday.png",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-purple-700 to-purple-800 py-16 px-6 text-center text-white">
      <h2 className="text-3xl font-semibold mb-10">Our most popular services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            {/* Image section */}
            <div className="flex justify-center items-center bg-white h-56">
              <Image
                src={service.image}
                alt={service.title}
                width={160}
                height={160}
                className="object-contain"
              />
            </div>

            {/* Yellow bottom section */}
            <div className="bg-yellow-400 text-gray-900 p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-sm leading-relaxed">{service.description}</p>
              </div>
              <div className="flex justify-end mt-4">
                <div className="bg-white p-2 rounded-full hover:bg-gray-100 transition">
                  <ArrowRight className="text-purple-700" size={18} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
