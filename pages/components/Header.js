import Image from "next/image";
import React from "react";
import Banner from "../../public/image/image.png";
import Rectangle from "../../public/image/rect.png";
import Navbar from "./navbar";

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
        <Navbar />
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
