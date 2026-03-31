import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { IoCartOutline, IoClose } from "react-icons/io5";
import Link from '../Link/Link';

const navData = [
  { id: 1, name: "Products", path: "/" },
  { id: 2, name: "Features", path: "/features" },
  { id: 3, name: "Pricing", path: "/pricing" },
  { id: 4, name: "Testimonials", path: "/Testimonials" },
  { id: 5, name: "FAQ", path: "/faq" }
];

const Navber = () => {
  const [open, setOpen] = useState(false);

  const links = navData.map(nav => (
    <li key={nav.id}>
      <Link nav={nav} />
    </li>
  ));

  return (
    <nav className="shadow">
      <div className='max-w-[1080px] mx-auto flex justify-between items-center py-4 relative px-2 sm:px-4 md:px-0'>

        {/* Logo */}
        <h2 className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text text-xl md:text-2xl font-semibold">
          DigiTools
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-4">
          {links}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Cart Icon (ALWAYS visible) */}
          <p className='cursor-pointer text-xl'>
            <IoCartOutline />
          </p>

          {/* Login + Button (desktop only) */}
          <div className='hidden md:flex items-center gap-3'>
            <button className='hover:text-gray-500 cursor-pointer'>Login</button>

            <button className="px-4 py-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl cursor-pointer">
              Get Started
            </button>
          </div>

          {/* Menu Icon (mobile only, AFTER cart) */}
          <div
            onClick={() => setOpen(!open)}
            className="sm:hidden text-2xl cursor-pointer"
          >
            {open ? <IoClose /> : <IoIosMenu />}
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden absolute left-0 w-full bg-white shadow-md transition-all duration-300 ${
            open ? 'top-14 opacity-100' : '-top-96 opacity-0'
          }`}
        >
          {links}

          <div className="px-4 py-2 flex flex-col gap-2">
            <button className='text-left hover:text-gray-500'>Login</button>

            <button className="px-4 py-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">
              Get Started
            </button>
          </div>
        </ul>

      </div>
    </nav>
  );
};

export default Navber;
