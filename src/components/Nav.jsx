import { useEffect, useMemo, useState } from 'react';
import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { FaXmark } from 'react-icons/fa6';
import { NavLink, Link } from 'react-router-dom';
import { defaultNavItems, loggedInNavItems } from '../utils/renderArr';
import useAuthStore from '../states/authState';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { user } = useAuthStore((state) => state);

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
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const navItems = useMemo(() => {
    return user ? loggedInNavItems : defaultNavItems;
  }, [user]);

  return (
    <header className="w-full bg-bgColor md:bg-transparent fixed top-0 left-0 right-0 z-50">
      <nav
        className={`lg:px-14 px-4 ${
          isSticky
            ? 'sticky top-0 left-0 right-0 bg-white duration-300 shadow-md'
            : ''
        }`}
      >
        <div className="flex items-baseline justify-between ">
          <Link
            to="/"
            className="font-dancing font-semibold text-6xl md:px-20 pt-10 pb-2"
          >
            Broccoli
          </Link>
          <ul className="md:flex space-x-12 hidden px-20">
            {navItems.map(({ name, path }) => (
              <li key={name} className="">
                <NavLink
                  to={path}
                  className={({ isActive }) => {
                    return !isActive
                      ? 'border-none py-2 px-2 text-textColor hover:text-primaryColor '
                      : 'border-b-4 py-2 px-2 text-primaryColor border-primaryColor';
                  }}
                >
                  {name}
                </NavLink>
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
            isMenuOpen ? 'block fixed top-0 left-0 right-0' : 'hidden'
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
