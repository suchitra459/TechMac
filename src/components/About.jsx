import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        
        <div className="text-black space-y-6"> 
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            About Tech Mac Project
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Tech Mac Project Private Limited is a leading infrastructure
            development company delivering high-quality township, transport,
            electrical, and telecom projects across India.
            <br /><br />
            With a commitment to innovation, quality, and sustainability,
            we build infrastructure that powers growth and connects communities.
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
          <span className="text-gray-500">Company Image </span>
        </div>

      </div>
    </section>
  );
};

export default About;
