import Image from "next/image";
import React, { useEffect, useState } from "react";
import Whatasapp from "./../public/image/wa.png";
import Logo from "./../public/image/logo_text.png";
import axios from "axios";

const Portal = () => {
  console.log(process.env);
  const [Datas, setDatas] = useState([]);
  const redirectWhatsApp = () => {
    window.open(`https://wa.me/6282322109841?text=Hi`, "_blank");
  };
  const redirectURL = (url) => {
    window.location = url;
  };
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          "https://api.ucuf-konveksi.ucufkonveksi.com/api/dashboard/" +
            "menu-all"
        )
        .then((result) => {
          //   setLoading(true);
          //   setTimeout(() => {
          setDatas(result.data.data);
          //     setLoading(false);
          //   }, datas);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <nav
        className="bg-white border-white-200 "
        style={{
          backgroundColor: " #0093E9",
          backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
        }}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="https://flowbite.com" className="flex items-center">
            <Image
              src={Logo}
              className="mr-3 h-8 object-cover h-19"
              height={100}
              alt="Flowbite Logo"
            />
          </a>
          <div className="flex items-center">
            <button
              href="#"
              className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
              onClick={redirectWhatsApp}
            >
              <div className="flex items-center text-white font-bold">
                <Image src={Whatasapp} alt="" width={30} className="mr-2" />
                Hubungi
              </div>
            </button>
          </div>
        </div>
      </nav>
      <div className="flex justify-center text-4xl text-blue-900 mt-[40px]">
        Selamat Datang di Portal Ucuf
      </div>
      {/* <div
        className="mx-auto mt-2 rounded-full bg-blue-900"
        style={{
          width: "200px",
          height: "4px",
        }}
      ></div> */}
      <div className="flex justify-center mt-[50px]">
        <div className="flex flex-wrap justify-center max-w-[1210px]">
          <div className="flex flex-wrap ">
            {Datas.map((item, keys) => {
              return (
                <div
                  className="w-[400px] h-[180px] flex justify-center"
                  key={keys}
                >
                  <div
                    className="p-6 shadow-xl bg-white flex items-center rounded-2xl cursor-pointer w-[350px] h-[150px]"
                    onClick={() => redirectURL(item.url)}
                  >
                    <div
                      className="rounded-full h-[100px] w-[100px] flex items-center justify-center"
                      style={{
                        backgroundColor: " #0093E9",
                        backgroundImage:
                          "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
                      }}
                    >
                      <Image
                        src={item.photoMenu}
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                    <div className="ml-4 text-xl text-blue-800 font-bold">
                      {item.name}
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="w-[400px] h-[180px] flex justify-center">
              <div className="p-6 shadow-xl bg-white flex items-center rounded-2xl cursor-pointer w-[350px] h-[150px]">
                <div
                  className="rounded-full h-[100px] w-[100px] flex items-center justify-center"
                  style={{
                    backgroundColor: " #0093E9",
                    backgroundImage:
                      "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
                  }}
                >
                  <Image src={Logo} width={100} height={100} alt="" />
                </div>
                <div className="ml-4 text-xl text-blue-800 font-bold">
                  Price
                </div>
              </div>
            </div>
            <div className="w-[400px] h-[180px] flex justify-center">
              <div className="p-6 shadow-xl bg-white flex items-center rounded-2xl cursor-pointer w-[350px] h-[150px]">
                <div
                  className="rounded-full h-[100px] w-[100px] flex items-center justify-center"
                  style={{
                    backgroundColor: " #0093E9",
                    backgroundImage:
                      "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
                  }}
                >
                  <Image src={Logo} width={100} height={100} alt="" />
                </div>
                <div className="ml-4 text-xl text-blue-800 font-bold">
                  Price
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
