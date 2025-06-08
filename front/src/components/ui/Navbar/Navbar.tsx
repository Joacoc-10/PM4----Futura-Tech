import { NavbarLinks } from "@/constants/Navbar";
import React from "react";
import NavbarItem from "./NavbarItem";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-primary_blue-500 dark:bg-gray-900  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-[2em] font-semibold whitespace-nowrap text-secondary_yellow-500">
              FuturaTech
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-accent_blue-500 hover:bg-light_blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-4"
            >
              Registrarse
            </button>
            <button
              type="button"
              className="text-white bg-accent_blue-500 hover:bg-light_blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
            >
              Iniciar sesión
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-primary_blue-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-primary_blue-500 dark:bg-gray-900 dark:border-gray-700">
              {NavbarLinks.map((item) => (
                <NavbarItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
