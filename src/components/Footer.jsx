import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-violet-300 text-black py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
        {/* Footer Links Section */}
        <div className="container mx-auto flex flex-col items-center justify-between gap-x-2 px-24 md:flex-row">
          {/* Explore Section */}
          <div>
            <h4 className="mb-4 font-general text-[10px] uppercase">Explore</h4>
            <ul className="space-y-1 font-circular-web text-2xl">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Prologue
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h4 className="mb-4 font-general text-[10px] uppercase">
              Products
            </h4>
            <ul className="space-y-1 font-circular-web text-2xl">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Radiant
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Nexus
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Zigma
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Azul
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="mb-4 font-general text-[10px] uppercase">
              Follow Us
            </h4>
            <ul className="space-y-1 font-circular-web text-2xl">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Youtube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Medium
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="mb-4 font-general text-[10px] uppercase">
              Resources
            </h4>
            <ul className="space-y-1 font-circular-web text-2xl">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" text-[10px] mt-16 container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center px-4 font-general md:text-left uppercase font-semibold">
          ©Zentry 2024. All rights reserved
        </p>
        <a
          href="#privacy-policy"
          className="text-center px-4 font-general hover:underline md:text-right uppercase"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
