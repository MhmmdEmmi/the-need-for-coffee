import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { useState } from "react";

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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
