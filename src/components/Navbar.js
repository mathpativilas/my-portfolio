import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className="bg-black text-white w-full h-20 items-center fixed  flex justify-between">
      <div>
        <h1 className="text-5xl ml-2 font-sign">Vilas</h1>
      </div>
      <ul className="hidden md:flex mr-8">
        {links.map((item) => (
          <li
            key={item.id}
            className="px-4 cursor-pointer capitalize font-medium
                 text-gray-500 hover:scale-105 duration-200 "
          >
            <Link to={item.link} smooth duration={500}>
              {item.link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="pr-4 cursor-pointer z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 duration-200 ">
          {links.map((item) => (
            <li
              key={item.id}
              className="px-4 text-4xl py-6 cursor-pointer capitalize font-medium
                 text-gray-500 hover:scale-105 duration-200 "
            >
              <Link
                onClick={() => setNav(!nav)}
                to={item.link}
                smooth
                duration={500}
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
