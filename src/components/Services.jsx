import React from "react";
import { motion } from "framer-motion";
import {
  FaCity,
  FaRoad,
  FaBolt,
  FaNetworkWired,
  FaTasks,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    title: "Township & Real Estate",
    desc: "Planning and modern township development.",
    icon: <FaCity />,
  },
  {
    title: "Transport Infrastructure",
    desc: "Roads, highways, bridges & transport networks.",
    icon: <FaRoad />,
  },
  {
    title: "Electrical Infrastructure",
    desc: "Power transmission & electrification projects.",
    icon: <FaBolt />,
  },
  {
    title: "Telecom Infrastructure",
    desc: "Telecom towers & fiber connectivity solutions.",
    icon: <FaNetworkWired />,
  },
  {
    title: "Project Management",
    desc: "End-to-end project planning & execution.",
    icon: <FaTasks />,
  },
  {
    title: "Maintenance & Support",
    desc: "Reliable maintenance & long-term support.",
    icon: <FaTools />,
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
        >
          Our Services
        </motion.h1>

        <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
          Delivering world-class infrastructure and development solutions
          across multiple sectors.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl">
                {service.icon}
              </div>

              <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>

              <p className="text-sm md:text-base text-gray-600">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
