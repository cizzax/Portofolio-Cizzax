// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full p-4 bg-teal-900 bg-opacity-60 backdrop-blur-md z-10">
      <div className="flex items-center justify-between">
        {/* Tombol CV di kiri */}
        <a href="https://drive.google.com/file/d/1UKWeehBhhF2ta6X9m9hraToENCswOQ96/view?usp=sharing" target="_blank">
          <button className="bg-white text-black px-4 py-2 rounded-full shadow-md font-semibold">
            CV
          </button>
        </a>
        
        {/* Tombol lain di tengah */}
        <div className="flex-1 flex justify-center space-x-4">
          <a href="#home">
            <button className="text-white px-4 py-2 rounded-full font-semibold hover:bg-teal-500 hover:bg-opacity-80 transition">
              Home
            </button>
          </a>
          <a href="#project">
            <button className="text-white px-4 py-2 rounded-full font-semibold hover:bg-teal-500 hover:bg-opacity-80 transition">
              Project
            </button>
          </a>
          <a href="#contact">
            <button className="text-white px-4 py-2 rounded-full font-semibold hover:bg-teal-500 hover:bg-opacity-80 transition">
              Contact
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
