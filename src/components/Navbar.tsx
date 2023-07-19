import { CgDetailsMore } from "react-icons/cg";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

interface NavbarLinks {
  name: string;
  link?: string;
  children?: NavbarLinks[];
}

const NavbarLinks: NavbarLinks[] = [
  {
    name: "Technology",
    children: [
      {
        name: "virtual field probing",
        link: "/technology/virtual-field-probing",
      },
      {
        name: "soil moister",
        link: "/technology/soil-moister",
      },
    ],
  },
  {
    name: "Product",
    children: [
      {
        name: "farmguru",
        link: "/products/farmguru",
      },
    ],
  },
  {
    name: "News",
    link: "/news",
  },
  {
    name: "Company",
    children: [
      {
        name: "about",
        link: "/company/about",
      },
      {
        name: "career",
        link: "/company/career",
      },
      {
        name: "contact",
        link: "/company/contact",
      },
    ],
  },
];

const Navbar = () => {
  const [mve, setMve] = useState<boolean>(false);
  const matches = useMediaQuery("(min-width: 640px)");
  const location = useLocation();
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

  React.useEffect(() => {
    setMve(false);
  }, [location]);

  const NavbarRender = () => {
    return (
      <div className="flex gap-12">
        {NavbarLinks.map((navlink, id) => {
          const [extend, setExtend] = useState<boolean>(false);
          return (
            <div className="relative" key={id}>
              <h1
                className="text-xl font-medium"
                onClick={() => setExtend(!extend)}
              >
                {navlink?.name}
              </h1>
              <div>
                {extend ? (
                  <ul className="absolute bottom-0 px-2 py-4 translate-y-full bg-white whitespace-nowrap">
                    {navlink.children?.map((_navlink, id) => (
                      <>
                        {_navlink.link ? (
                          <li key={id}>
                            <Link to={_navlink.link}>{_navlink.name}</Link>
                          </li>
                        ) : (
                          <></>
                        )}
                      </>
                    ))}
                  </ul>
                ) : (
                  <></>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const MobileNavbarRender = ({ navlink }: { navlink: NavbarLinks }) => {
    const [extend, setExtend] = useState<boolean>(false);
    return (
      <div className="flex flex-col px-2 py-2">
        {navlink.link ? (
          <Link to={navlink.link} className={`text-xl font-light`}>
            {navlink.name}
          </Link>
        ) : (
          <h1
            className={`text-xl font-medium`}
            onClick={() => setExtend(!extend)}
          >
            {navlink.name}
          </h1>
        )}

        {navlink.link ? (
          <></>
        ) : (
          <div className={`${extend ? "block px-4" : "hidden"}`}>
            {navlink.children?.map((_navlink, id) => (
              <MobileNavbarRender key={id} navlink={_navlink} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`fixed top-0 flex justify-center w-full z-50 ${
        scrolledPastThreshold || hover || mve
          ? " bg-white drop-shadow-md delay-75 text-black"
          : " bg-transparent text-white"
      }  transition-all duration-300 `}
    >
      <div className="container relative flex items-center justify-between">
        <Link to={"/"}>
          <div className="p-2 bg-white rounded-b-sm w-fit">
            <img alt="VAIS Logo" className="h-16" src="/logo.png" />
          </div>
        </Link>

        {matches ? (
          <>
            <NavbarRender />
          </>
        ) : (
          <>
            <div className="">
              <CgDetailsMore
                className="text-3xl"
                onClick={() => setMve(!mve)}
              />
              {mve ? (
                <div className="absolute bottom-0 left-0 w-full px-4 py-4 translate-y-full bg-white rounded-b-lg">
                  {NavbarLinks.map((navlink, id) => (
                    <MobileNavbarRender key={id} navlink={navlink} />
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
