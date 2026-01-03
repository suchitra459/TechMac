import React from "react";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full px-6 md:px-20 pt-32"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight">
          Building Tomorrow’s <br /> Infrastructure Today.
        </h1>

        <p className="mt-6 text-gray-200 max-w-2xl">
          Your Trusted Partner in Township, Transport, Electrical, and Telecom Solutions.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold"
          >
            Explore Services
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-white text-white px-6 py-3 rounded-md"
          >
            Get a Quote
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
