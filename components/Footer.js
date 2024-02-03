import React from "react";

const Footer = () => {
  return (
    <div className="relative mt-10">
      <div className="bg-yellow-400 h-32 lg:max-w-4xl mx-auto  items-center text-center absolute -top-28 right-0 left-0 justify-between grid grid-cols-1 place-items-center">
        <div>
          <p
            className="font-medium text-nowrap
          "
          >
            Start a Project
          </p>
        </div>
        <div>
          <p className="font-serif text-sm">
            Interested in working together? We should queue up a chat. i will
            buy a cofee
          </p>
        </div>
        <button className=" bg-gradient-to-br from-blue-700 to-pink-400 p-4 w-44 rounded-md">
          Lets do this
        </button>
      </div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <h2 className="text-lg font-semibold">About Us</h2>
            <p className="mt-2">Hello! Amazing.com members</p>
          </div>
          <div className="text-center mb-4 lg:mb-0">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-2">
              <li className="mb-1">
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center lg:text-right">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="flex justify-center lg:justify-end mt-2">
              <a href="#" className="mr-4 hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="mr-4 hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
