// eslint-disable-next-line no-unused-vars

import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };


  return (
    <div className="bg-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center">
            <a href="/" className="text-white">
              Navbar
            </a>
          </div>
          {/*navLinks*/}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  className="text-gray-300 transition-all duration-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          {/*button */}
          <div className="mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex  p-1 rounded-md
             text-gray-400
             hover:text-white hover:bg-gray-300 
              focus:outline-none focus:ring-2 focus:ring-offset-2
               focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open Menu</span>
              {open === true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* mobile-menu */}
      {open ? (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 sm:px-3">
          {navLinks.map((link, index) => {
            <a
            key={index}
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            href={link.link}
          >
            {link.title}
          </a>
          })}
        </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
