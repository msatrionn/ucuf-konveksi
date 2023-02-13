import Image from "next/image";
import React from "react";
import LogoText from "../../public/image/logo_text.png";
import Instagram from "../../public/icons/ig_blue.png";
import Facebook from "../../public/icons/fb_blue.png";
import Youtube from "../../public/icons/yt_blue.png";
import Whatsapp from "../../public/icons/wa_blue.png";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="p-4 bg-java-blue shadow md:px-6 md:py-5 dark:bg-gray-900 mt-4">
        <div className="sm:flex items-center justify-center"></div>
        <div className="flex justify-center mt-5">
          <div className="">
            <div className="mb-4 text-white">Follow Our Social Media !</div>
            <div className="flex">
              <a href="">
                <Image src={Facebook} alt="" width={30} className="ml-2 mr-2" />
              </a>
              <a href="">
                <Image
                  src={Instagram}
                  alt=""
                  width={30}
                  className="ml-2 mr-2"
                />
              </a>
              <a href="">
                <Image src={Youtube} alt="" width={30} className="ml-2 mr-2" />
              </a>
              <a href="">
                <Image src={Whatsapp} alt="" width={30} className="ml-2 mr-2" />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-white justify-center">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </span>
      </div>
      <div className="bg-java-blue text-white text-right text-xs">
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Muhammad Satriyo
        </a>
        . All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
