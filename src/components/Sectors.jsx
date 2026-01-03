import React from "react";
import {
  FaCity,
  FaRoad,
  FaBolt,
  FaNetworkWired,
} from "react-icons/fa";

const sectors = [
  {
    title: "Township & Real Estate",
    desc: "Residential and commercial township development with modern infrastructure.",
    icon: <FaCity />,
  },
  {
    title: "Transport Infrastructure",
    desc: "Roads, highways, bridges, and integrated transport solutions.",
    icon: <FaRoad />,
  },
  {
    title: "Electrical Infrastructure",
    desc: "Power transmission, substations, and electrification projects.",
    icon: <FaBolt />,
  },
  {
    title: "Telecom Infrastructure",
    desc: "Telecom towers, fiber networks, and connectivity solutions.",
    icon: <FaNetworkWired />,
  },
];

const Sectors = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-10xl mx-auto px-6 md:px-20">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#0b1d33]">
          Our Sectors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition duration-300 group text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl group-hover:bg-blue-600 group-hover:text-white transition">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
