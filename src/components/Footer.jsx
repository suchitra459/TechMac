import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0b1d33] to-[#102a4a] text-gray-300">
      <div className="max-w-9xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Tech Mac Project <br /> Private Limited
          </h3>
          <p className="text-sm">
            Building the foundation for a connected future.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Sectors</li>
            <li>Projects</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Township & Real Estate</li>
            <li>Transport Infrastructure</li>
            <li>Electrical Infrastructure</li>
            <li>Telecom Infrastructure</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact Info</h4>
          <p className="text-sm">Address: 123 Infrastructure Hub City</p>
          <p className="text-sm mt-2">Phone: +91 1234567890</p>
          <p className="text-sm mt-2">Email: info@techmacproject.com</p>
        </div>
      </div>

      <div className="text-center py-4 border-t border-white/10 text-sm">
        © {new Date().getFullYear()} Tech Mac Project Private Limited. All Rights Reserved.
      </div>
      
    </footer>
  );
};

export default Footer;
