import { useEffect, useState } from "react";
import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // nav items array
  const navItems = [
    {
      name: "Trang chủ",
      path: "/",
    },
    {
      name: "Món ăn",
      path: "/meal",
    },
    {
      name: "Kế hoạch",
      path: "/planner",
    },
    {
      name: "Đăng nhập",
      path: "/login",
    },
  ];
  return (
    <header className="w-full bg-bgColor md:bg-transparent fixed top-0 left-0 right-0 z-50">
      <nav
        className={`lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 bg-white duration-300 shadow-md"
            : ""
        }`}
      >
        <div className="flex items-baseline justify-between ">
          <a
            href=""
            className="font-dancing font-semibold text-6xl md:px-20 pt-10 pb-5"
          >
            Broccoli
          </a>
          <ul className="md:flex space-x-12 hidden px-20 py-5">
            {navItems.map(({ name, path }) => (
              <li key={name} className="hover:text-primaryColor">
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:text-primaryColor"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <HiOutlineMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 px-4 py-4 mt-32 border-2 border-primaryColor bg-bgColor rounded-md ${
            isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"
          }`}
        >
          {navItems.map(({ name, path }) => (
            <li key={name} className="hover:text-primaryColor list-none">
              <a href={path}>{name}</a>
            </li>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
