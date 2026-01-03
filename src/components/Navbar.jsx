import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0b1d33] to-[#102a4a]">
      <div className="flex items-center justify-between px-6 md:px-20 py-4">

        <div className="flex items-center gap-3 text-white font-semibold">
          <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center">
            TM
          </div>
          <span className="text-sm md:text-base">
            Tech Mac Project <br /> Private Limited
          </span>
        </div>

        <ul className="hidden md:flex gap-8 text-gray-200 font-medium">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Sectors</li>
           <li className="hover:text-white cursor-pointer">Services</li>
          <li className="hover:text-white cursor-pointer">About</li>
                    <li className="hover:text-white cursor-pointer">Contact Us</li>

        </ul>

        <button className="hidden md:block bg-black/40 text-white px-5 py-2 rounded-md hover:bg-black">
          Contact Us
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0b1d33] px-6 py-4 space-y-4 text-white">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Sectors</div>
          <div className="cursor-pointer">Services</div>
          <div className="cursor-pointer">About </div>
          <div className="cursor-pointer">Contact Us</div>

          <button className="w-full bg-blue-600 py-2 rounded-md">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
