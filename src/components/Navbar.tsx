import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [scrolledPastThreshold, setScrolledPastThreshold] =
    React.useState(false);
  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition > 80) {
      setScrolledPastThreshold(true);
    } else {
      setScrolledPastThreshold(false);
    }
  };
  const [hover, setHover] = React.useState<Boolean>();

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLinkDropdown = ({
    children,
    buttonname,
  }: {
    children: React.ReactNode;
    buttonname: string;
  }) => {
    const [hover, setHover] = useState<boolean>(false);
    return (
      <div
        className="relative px-4 mt-8"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <h1 className="text-xl font-medium">{buttonname}</h1>
        {hover ? (
          <div
            onMouseEnter={() => setHover(true)}
            className="absolute bottom-0 flex flex-col gap-4 p-4 mt-8  min-w-[200px] text-base text-gray-700 translate-y-full bg-white"
          >
            {children}
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  };

  return (
    <nav
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`fixed top-0 flex justify-center w-full z-50 ${
        scrolledPastThreshold || hover
          ? " bg-white drop-shadow-md delay-75"
          : " bg-transparent"
      }  transition-all duration-300 `}
    >
      <div className="container flex justify-between transition-all duration-300 ">
        <Link to={"/"}>
          <div className="p-2 bg-white rounded-b-sm w-fit">
            <img alt="VAIS Logo" className="h-16" src="/logo.png" />
          </div>
        </Link>
        <ul
          className={`flex space-x-4 gap-4 h-full  text-base font-medium capitalize transition-all duration-150 ${
            scrolledPastThreshold || hover ? " text-black" : " text-white"
          }`}
        >
          <li>
            <NavLinkDropdown buttonname="Technology">
              <Link
                className="whitespace-nowrap hover:text-vais-pri"
                to={"/technology/virtual-field-probing"}
              >
                virtual field probing
              </Link>
              <Link
                className="whitespace-nowrap hover:text-vais-pri"
                to={"/technology/soil-moisture-engine"}
              >
                soil moisture engine
              </Link>
            </NavLinkDropdown>
          </li>
          <li>
            <NavLinkDropdown buttonname="Products">
              <Link
                className="whitespace-nowrap hover:text-vais-pri"
                to={"/technology/virtual-field-probing"}
              >
                FarmGuru
              </Link>
            </NavLinkDropdown>
          </li>
          <li>
            <div className="relative px-4 mt-8">
              <Link
                className="text-lg font-medium whitespace-nowrap hover:text-vais-pri"
                to={"/news"}
              >
                News
              </Link>
            </div>
          </li>
          <li>
            <NavLinkDropdown buttonname="Company">
              <Link
                className="whitespace-nowrap hover:text-vais-pri"
                to={"/about "}
              >
                About
              </Link>
              <Link
                className="whitespace-nowrap hover:text-vais-pri"
                to={"/career"}
              >
                Career
              </Link>
              <Link
                className="whitespace-nowrap hover:text-vais-pri"
                to={"/contact"}
              >
                Contact
              </Link>
            </NavLinkDropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
