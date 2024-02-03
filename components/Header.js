"use client";
import Link from "next/link";
import { ModeToggle } from "./darkModeTogglet";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [showmenuoption, setshowMenuOption] = useState(false);
  const showMenu = (e) => {
    setshowMenuOption(!showmenuoption);
  };

  const closeMenu = () => {
    setshowMenuOption(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black">
      <div
        className="fixed top-0 right-0 h-full w-96 dark:bg-white text-white dark:text-gray-700 font-medium  rounded-l-md bg-black transition-all duration-300 z-50"
        style={{
          transform: showmenuoption ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <button
          className="absolute top-4 right-4 px-3 py-2 bg-gray-800 text-white rounded-md"
          onClick={showMenu}
        >
          Close
        </button>
        <nav className="flex flex-col items-center h-full">
          <a href="#" className=" py-4">
            Link 1
          </a>
          <a href="#" className="py-4">
            Link 2
          </a>
          <a href="#" className="py-4">
            Link 3
          </a>
          <a href="#" className="py-4">
            Link 4
          </a>
        </nav>
      </div>

      <div className="flex justify-between p-4 ">
        <Link href="/">Amazing.com</Link>
        <div className="flex space-x-3 items-center">
          <ModeToggle />

          <MdOutlineMenu
            className="w-8 h-8 cursor-pointer lg:hidden "
            onClick={showMenu}
          />
          <div className="lg:flex hidden space-x-3 font-semibold pl-10">
            <Link
              href="/home"
              className="text-blue-500 hover:text-blue-800 hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-blue-500 hover:text-blue-800 hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="/announcment"
              className="text-blue-500 hover:text-blue-800 hover:underline underline-offset-4"
            >
              Announcement
            </Link>
            <Link
              href="/contact"
              className="text-blue-500 hover:text-blue-800 hover:underline underline-offset-4"
            >
              contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
