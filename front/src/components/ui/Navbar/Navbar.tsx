import { NavbarLinks } from "@/constants/Navbar";
import React from "react";
import NavbarItem from "./NavbarItem";
import Link from "next/link";
import { Routes } from "@/routes";

const Navbar = () => {
  return (
    <>
      <nav className="top-0 z-20 w-full border-b border-gray-200 bg-primary_blue-500 dark:bg-gray-900 start-0 dark:border-gray-600">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <Link
            href={Routes.home}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-[2em] font-semibold whitespace-nowrap text-secondary_yellow-500">
              FuturaTech
            </span>
          </Link>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="px-4 py-2 mr-4 text-sm font-medium text-center text-white rounded-lg bg-accent_blue-500 hover:bg-light_blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Registrarse
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-center text-white rounded-lg bg-accent_blue-500 hover:bg-light_blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Iniciar sesión
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-primary_blue-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-primary_blue-500 dark:bg-gray-900 dark:border-gray-700">
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
