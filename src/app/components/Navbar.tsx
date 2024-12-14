import React from "react";
import Image from "next/image";
import Logo from "@/app/assets/Logo.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 w-full h-[92px] bg-[#043873] px-6 py-4 flex justify-between items-center z-50">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <a href="#">
          <Image src={Logo} alt="Logo" width={191} height={34} />
        </a>
      </div>

      {/* Navigation Section */}
      <div className="flex items-center space-x-6 md:space-x-8">
        {/* Menu Items */}
        <div className="hidden md:block">
          <ul className="text-[18px] font-semibold leading-[23px] flex space-x-6 text-white">
            <li>Products</li>
            <li>Solution</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Login Button */}
        <div>
          <button className="py-2 px-3 rounded-lg w-[220px] h-[40px] bg-[#4F9CF9] text-white mx-6">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">☰</button> {/* Replace with a mobile menu icon */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
