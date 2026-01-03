import React from "react";
import {
  FaUsers,
  FaCertificate,
  FaClock,
  FaMapMarkedAlt,
} from "react-icons/fa";

const points = [
  {
    title: "Experienced Team",
    desc: "Highly skilled professionals with industry expertise",
    icon: <FaUsers />,
  },
  {
    title: "ISO Certified",
    desc: "International quality standards & processes",
    icon: <FaCertificate />,
  },
  {
    title: "On-Time Delivery",
    desc: "We value time and always meet deadlines",
    icon: <FaClock />,
  },
  {
    title: "Pan-India Presence",
    desc: "Executing projects across India efficiently",
    icon: <FaMapMarkedAlt />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0b1d33] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-xl 
              hover:bg-white/20 transition duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl text-blue-400 mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
