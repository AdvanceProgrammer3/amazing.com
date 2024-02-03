import Link from "next/link";
import { ModeToggle } from "./darkModeTogglet";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between p-4 ">
        <Link href="/">Amazing.com</Link>
        <div className="flex space-x-3 items-center">
          <ModeToggle />

          <MdOutlineMenu className="w-8 h-8 cursor-pointer lg:hidden " />
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
