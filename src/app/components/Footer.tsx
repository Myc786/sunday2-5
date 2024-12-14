import Image from "next/image";
import Logo from "@/app/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between px-5">
        {/* Branding Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6 space-x-[10px] space-y-3">
          <Image src={Logo} alt="logo" width={191} height={34} />
          <p className="text-sm leading-relaxed">
            whitespace was created for the new ways we live and work. We make a better workspace around the world.
          </p>
        </div>

        {/* Product Links */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-base font-semibold mb-4">Product</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Customer stories
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-base font-semibold mb-4">Resources</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Guides & tutorials
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Help center
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-base font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Media kit
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-6 pt-4">
        <p className="text-center text-sm">
          ©2021 Whitepace LLC.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
