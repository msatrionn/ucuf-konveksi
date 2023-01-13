import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import CheckImg from "../../public/image/Vector.svg";

const CardProduct = ({
  id,
  keys,
  colorName,
  color,
  price,
  promoPrice,
  item,
  details,
  type,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [age, setAge] = useState("adult");
  const [size, setSize] = useState("L");
  const [qty, setQty] = useState(0);
  details?.map((data) =>
    data.size?.map((item) => (item.name = item.name.toLocaleUpperCase()))
  );
  const filteredData = details?.filter((data) =>
    data.age.toLocaleLowerCase().includes(age.toLocaleLowerCase())
  );
  details = filteredData;
  const handleAdult = () => {
    setAge("adult");
    setQty("");
    setSize("");
  };
  const handleChild = () => {
    setSize("");
    setQty("");
    setAge("child");
  };
  const handleSetData = (size, qty) => {
    setQty(qty);
    setSize(size);
  };
  const redirectWhatsApp = () => {
    if (qty < 1) {
      alert("Silahkan pilih ukuran terlebih dahulu");
    } else {
      window.open(
        `https://wa.me/6282322109841?text=Hi,%20saya%20ingin%20pesan%20kaos%20${item.title}%20versi%20${age}%20dengan%20ukuran%20${size}%20,%20apakah%20tersedia?`,
        "_blank"
      );
    }
  };
  return (
    <div>
      <section className="mx-auto w-fit p-12 drop-shadow-lg">
        <div className="w-72 h-fit group">
          <Fragment key={keys}>
            <div className="relative overflow-hidden bg-white ">
              <Image
                className="h-96 w-full object-cover"
                src={color}
                key={keys}
                alt=""
                priority
              />
              <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button
                  className="bg-blue-light text-java-blue active:bg-java-blue font-bold uppercase text-sm px-8 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Order
                </button>
              </div>
              <div className="text-left pl-4">
                <h2 className="mt-3 text-xl capitalize mb-2" key={keys}>
                  {colorName}
                </h2>
                <span className="bg-blue-light text-java-blue p-1 text-xs">
                  {type}
                </span>
                <div className="pb-2">
                  {/* <del className="text-red-700 text-md">
                    <span className="text-xs">RP</span>
                    <span className="mt-2"> {price}</span>
                  </del> */}
                  <p className="text-md mt-2 ml-1 inline-block  text-java-blue">
                    <span className="text-xs">RP</span>
                    {price}
                  </p>
                </div>
              </div>
            </div>
          </Fragment>
        </div>
      </section>
      {/* modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="bg-white w-[50%] h-[95%] overflow-y-auto rounded-xl">
              <div className="max-w-md mx-auto bg-white overflow-hidden md:max-w-full">
                <div className="md:flex container-product">
                  <div className="md:shrink-0">
                    <Image
                      className="h-[355px] w-[full] object-cover md:w-[355px] p-7"
                      src={color}
                      alt="Modern building architecture"
                    />
                  </div>
                  <div className="">
                    <div className="w-full mt-8 text-left flex justify-center">
                      <div className="w-[50px] h-[60px]">
                        <span className="text-xl bg-blue-light p-2">#129</span>
                      </div>
                      <span className="text-xl ml-6">
                        Hijau Pucuk - Lengan Panjang Tanpa RIB
                      </span>
                    </div>
                    <div className="bg-blue-light max-w-[350px] container-product-button">
                      <div className="text-left text-3xl text-java-blue pl-4 pt-4 pb-2">
                        Rp30.000
                      </div>
                      <div className="text-left pl-4 italic text-gray-400 text-sm pb-2">
                        Jaminan produk berkualitas 100% Ori
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="container-product-button">
                        <div className="flex justify-start text-gray-400 mt-2 mb-2">
                          Jenis Kaos
                        </div>
                        <div className="flex">
                          <div className="flex items-center bg-blue-light border rounded-md border-java-blue pt-1 pb-1  pr-4 pl-4 mr-4 w-[150px] text-left text-java-blue">
                            <span>Dewasa</span>
                            <Image src={CheckImg} className="ml-4" alt="" />
                          </div>
                          <div className="flex items-center border rounded-md border-gray-200 pt-1 pb-1 pr-4 pl-4 w-[150px] text-left text-java-blue">
                            <span>Anak</span>
                            {/* <Image src={CheckImg} className="ml-4" alt="" /> */}
                          </div>
                        </div>
                      </div>

                      <div className="container-product-button">
                        <div className="flex justify-start text-gray-400 mt-2 mb-2">
                          Bahan
                        </div>
                        <div className="flex">
                          <div className="flex items-center bg-blue-light border rounded-md border-java-blue pt-1 pb-1  pr-4 pl-4 mr-4 w-[150px] text-left text-java-blue">
                            <span>24S</span>
                            <Image src={CheckImg} className="ml-4" alt="" />
                          </div>
                          <div className="flex items-center border rounded-md border-gray-200 pt-1 pb-1 pr-4 pl-4 w-[150px] text-left text-java-blue">
                            <span>30S</span>
                            {/* <Image src={CheckImg} className="ml-4" alt="" /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-md mx-auto bg-white overflow-hidden md:max-w-full">
                <div className="md:flex">
                  <div className="table-class mx-auto">
                    <div className="relative overflow-x-auto  sm:-mx-6 lg:-mx-8 shadow-md sm:rounded-lg">
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" className="px-8 py-1 text-xs">
                              Color
                            </th>
                            <th scope="col" className="px-8 py-1 text-xs">
                              Category
                            </th>
                            <th scope="col" className="px-8 py-1 text-xs">
                              Price
                            </th>
                            <th scope="col" className="px-8 py-1 text-xs">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td className="px-8 py-1 text-xs">Sliver</td>
                            <td className="px-8 py-1 text-xs">Laptop</td>
                            <td className="px-8 py-1 text-xs">$2999</td>
                            <td className="px-8 py-1 text-xs"></td>
                          </tr>
                          <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-8 py-1 text-xs">White</td>
                            <td className="px-8 py-1 text-xs">Laptop PC</td>
                            <td className="px-8 py-1 text-xs">$1999</td>
                            <td className="px-8 py-1 text-xs">
                              <a
                                href="#"
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td className="px-8 py-1 text-xs">Black</td>
                            <td className="px-8 py-1 text-xs">Accessories</td>
                            <td className="px-8 py-1 text-xs">$99</td>
                            <td className="px-8 py-1 text-xs">
                              <a
                                href="#"
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-8 py-1 text-xs">Gray</td>
                            <td className="px-8 py-1 text-xs">Phone</td>
                            <td className="px-8 py-1 text-xs">$799</td>
                            <td className="px-8 py-1 text-xs">
                              <a
                                href="#"
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-8 py-1 text-xs">Red</td>
                            <td className="px-8 py-1 text-xs">Wearables</td>
                            <td className="px-8 py-1 text-xs">$999</td>
                            <td className="px-8 py-1 text-xs">
                              <a
                                href="#"
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-8 py-1 text-xs">Red</td>
                            <td className="px-8 py-1 text-xs">Wearables</td>
                            <td className="px-8 py-1 text-xs">$999</td>
                            <td className="px-8 py-1 text-xs">
                              <a
                                href="#"
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-8 py-1 text-xs">Red</td>
                            <td className="px-8 py-1 text-xs">Wearables</td>
                            <td className="px-8 py-1 text-xs">$999</td>
                            <td className="px-8 py-1 text-xs">
                              <a
                                href="#"
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-8 py-1 text-xs">Red</td>
                            <td className="px-8 py-1 text-xs">Wearables</td>
                            <td className="px-8 py-1 text-xs">$999</td>
                            <td className="px-8 py-1 text-xs">
                              <a
                                href="#"
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-8 py-1 text-xs">Red</td>
                            <td className="px-8 py-1 text-xs">Wearables</td>
                            <td className="px-8 py-1 text-xs">$999</td>
                            <td className="px-8 py-1 text-xs">
                              <a
                                href="#"
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-8 py-1 text-xs">Red</td>
                            <td className="px-8 py-1 text-xs">Wearables</td>
                            <td className="px-8 py-1 text-xs">$999</td>
                            <td className="px-8 py-1 text-xs">
                              <a
                                href="#"
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between bg-gray-200 mt-[38px] flex-wrap wrapper-footers">
                <div className="flex items-center justify-center mb-5 mt-5 break-words">
                  Perubahan data stok terakhir: 09 Januari 2023
                </div>
                <div className="mr-7 flex justify-center items-center  mb-5 mt-5">
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-java-blue p-2 pl-3 pr-3 rounded-md"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-java-blue text-white p-2 pl-3 pr-3 rounded-md ml-4"
                  >
                    Beli Sekarang
                  </button>
                </div>
              </div>
              {/* <div className="flex  flex-wrap bg-red-200 h-[100%]">
                <div className="w-[50%] h-[50%] flex justify-center">
                  <Image
                    className="h-[450px] w-[450px] object-cover p-6"
                    src={color}
                    key={keys}
                    alt=""
                    priority
                  />
                </div>
                <div className="w-[50%] mt-8 text-left flex">
                  <div className="w-[50px] h-[60px]">
                    <span className="text-xl bg-blue-light p-2">#129</span>
                  </div>
                  <span className="text-xl ml-6">
                    Hijau Pucuk - Lengan Panjang Tanpa RIB
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default CardProduct;
