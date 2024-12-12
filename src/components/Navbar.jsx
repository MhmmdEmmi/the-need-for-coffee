import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { useState } from "react";
import { LINKS } from "../constants/index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="border-b-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
          <div className="pr-2">
            <a href="#">
              {/* <img src={logo} alt="logo" width={150} height={15} /> */}
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl pl-2 focus:outline-none"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>

          <div className="hidden md:grid md:grid-cols-5 space-x-8 md:space-x-4 pl-2">
            {LINKS.map((link, index) => (
              <a key={index} href={link.link} className="text-sm font-medium">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute bg-neutral-50 w-full py-5 mt-2 border-b-4`}
        >
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="text-lg font-medium block py-2 tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
