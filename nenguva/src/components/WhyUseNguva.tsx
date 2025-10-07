import Image from "next/image";

export default function WhyUseNguva() {
  const features = [
    {
      title: "Save money",
      description:
        "We’ll help you find discounted rates with premium brand couriers. That means you’ll still receive a great service — you just pay less!",
      image: "/piggy.png", // replace with your image in /public folder
      bgColor: "bg-yellow-400",
    },
    {
      title: "Save time",
      description:
        "No need to shop around for the best price — we’ll do it for you. In seconds you can compare prices from multiple couriers all in one place.",
      image: "/clock.png", // replace with your image in /public folder
      bgColor: "bg-yellow-400",
    },
    {
      title: "Send multiple parcels",
      description:
        "Sending more than one parcel? Add multiple parcels to your booking or use our handy bulk uploader tools.",
      image: "/boxes.png", // replace with your image in /public folder
      bgColor: "bg-yellow-400",
    },
  ];

  return (
    <section className="w-full bg-green-600 py-16 px-6 text-center text-white">
      <h2 className="text-3xl font-semibold mb-10">Why use Nguva?</h2>

      {/* Cards container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className={`${feature.bgColor} flex justify-center items-center h-56`}>
              <Image
                src={feature.image}
                alt={feature.title}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            <div className="p-6 text-gray-800">
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
