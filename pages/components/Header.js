import Image from "next/image";
import React from "react";
import Logo from "../../public/image/logo_text.png";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="bg-white shadow">
          <div className="container mx-auto px-6 py-3 ">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold text-gray-700">
                  <a
                    href="#"
                    className="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl flex"
                  >
                    <Image
                      src={Logo}
                      className="mr-3 h-8 object-cover h-19"
                      height={100}
                      alt="Flowbite Logo"
                    />
                  </a>
                </div>
                <div className="flex md:hidden">
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                    aria-label="toggle menu"
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="hidden -mx-4 md:flex md:items-center">
                <a
                  href="#"
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                >
                  Size Chart
                </a>
                <a
                  href="#"
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div
          className="w-full bg-cover bg-center"
          style={{
            height: "32rem",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1672359171910-4f06e805396a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80)",
          }}
        >
          <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
                Choose your favorite color
                <br />
                <span className="text-custom-blue-100 text-[20px]">
                  for the best appearance
                </span>
              </h1>
              <input
                className="shadow appearance-none border border-gray-500 rounded w-full mt-5 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Search"
              ></input>
              <button className="mt-4 px-4 py-2 bg-java-blue text-white text-sm uppercase font-medium rounded hover:java-blue-500 focus:outline-none focus:bg-java-blue-500">
                Search Color
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
