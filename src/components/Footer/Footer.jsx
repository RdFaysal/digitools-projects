import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#101727]">
      <div className="max-w-[1080px] mx-auto px-4 md:px-0 py-12">
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold text-white">DigiTools</h2>
            <p className="text-gray-400 text-sm mt-3">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-300">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Templates</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-300">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold mb-3 text-gray-300">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Community</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold mb-3 text-gray-300">Follow Us</h3>

            <div className="flex gap-4 text-xl">
              <a href="#" className="p-2 rounded-full bg-white hover:bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:text-white transition">
                <AiFillInstagram />
              </a>

              <a href="#" className="p-2 rounded-full bg-white hover:bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:text-white transition">
                <IoLogoFacebook />
              </a>

              <a href="#" className="p-2 rounded-full bg-white hover:bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:text-white transition">
                <FaXTwitter />
              </a>
            </div>
          </div>

        </div>

       
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          
          <p>© 2026 DigiTools. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
