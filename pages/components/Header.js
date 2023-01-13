import Image from "next/image";
import React from "react";
import Logo from "../../public/image/logo_text.png";
import Banner from "../../public/image/image.png";
import Rectangle from "../../public/image/rect.png";

const styles = {
  bannerContainer: {
    backgroundImage: `url(${Banner.src})`,
    height: "32rem",
  },
  buttonImg: {
    backgroundImage: `url(${Rectangle.src})`,
  },
};
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
          style={styles.bannerContainer}
        >
          <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
                Pilih warna favoritmu !
                <br />
                <span className="text-custom-blue-100 text-[20px]">
                  untuk penampilan terbaik
                </span>
              </h1>
              <div className="flex items-center mt-3">
                <input
                  className="h-10 w-full pl-4"
                  placeholder="Search"
                ></input>
                <button
                  className="h-10 w-[200px] text-white"
                  style={styles.buttonImg}
                >
                  Cari Warna
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
