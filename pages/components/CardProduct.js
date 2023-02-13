import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import CheckImg from "../../public/image/Vector.svg";

const CardProduct = ({ id, photo, description, price, details }) => {
  const [showModal, setShowModal] = useState(false);
  const [age, setAge] = useState("dewasa");
  const [size, setSize] = useState("l");
  const [qty, setQty] = useState(0);
  const [Check, setCheck] = useState([]);
  const [Item, setItem] = useState([]);
  const [Data, setData] = useState([]);
  const [Ages, setAges] = useState("dewasa");
  const [Price, setPrice] = useState(price);
  const [Material, setMaterial] = useState("30s");
  const [Type, setType] = useState("pendek");
  const handleAdult = (item, e) => {
    const datas = [];
    if (e.target.checked) {
      setPrice(item.price);
      datas.push(item.size);
      setCheck(item.size);
    }
    setAge("dewasa");
    setQty(1);
    setSize("");
  };
  const DataDetail = [];
  details.map((item) => {
    if (item.age === Ages && item.type === Type && item.material === Material) {
      DataDetail.push(item);
    }
  });
  const dataXS = [];
  const dataS = [];
  const dataM = [];
  const dataL = [];
  const dataXL = [];
  const dataXXL = [];
  const dataXXXL = [];
  const dataXXXXL = [];
  DataDetail.map((item) => {
    if (item.size == "xs") {
      dataXS.push(item);
    } else if (item.size == "s") {
      dataS.push(item);
    } else if (item.size == "m") {
      dataM.push(item);
    } else if (item.size == "l") {
      dataL.push(item);
    } else if (item.size == "xl") {
      dataXL.push(item);
    } else if (item.size == "xxl") {
      dataXXL.push(item);
    } else if (item.size == "xxxl") {
      dataXXXL.push(item);
    } else if (item.size == "xxxxl") {
      dataXXXXL.push(item);
    }
  });

  const redirectWhatsApp = (Item) => {
    if (Item[0]?.stock < 1) {
      alert("Silahkan pilih ukuran terlebih dahulu");
    } else {
      window.open(
        `https://wa.me/6282322109841?text=Hi,%20saya%20ingin%20pesan%20kaos%20${description}%20versi%20${age}%20dengan%20ukuran%20${size}%20,%20apakah%20tersedia?`,
        "_blank"
      );
    }
  };
  useEffect(() => {
    Item.map((data) => {
      setSize(data.size);
      setPrice(data.price);
      setQty(data.stock);
    });
  }, [Item]);

  return (
    <div className="">
      <section className="mx-auto w-fit p-2 drop-shadow-lg">
        <div className="w-64 h-fit group">
          <Fragment key={id}>
            <div className="relative overflow-hidden bg-white ">
              <Image
                className="h-96 w-full object-cover"
                src={photo}
                key={id}
                alt=""
                width={600}
                height={600}
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
                <h2 className="mt-3 text-xl capitalize mb-2" key={id}>
                  {/* {colorName} */}
                </h2>
                <span className="bg-blue-light text-java-blue p-1 text-xs">
                  <span className="text-xs">RP</span>
                  {Price}
                </span>
                <div className="pb-2">
                  {/* <del className="text-red-700 text-md">
                    <span className="text-xs">RP</span>
                    <span className="mt-2"> {Price}</span>
                  </del> */}
                  {/* <p className="text-md mt-2 inline-block  text-java-blue">
                    <span className="text-xs">RP</span>
                    {Price}
                  </p> */}
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
            <div className="bg-white w-[70%] h-[95%] overflow-y-auto rounded-xl shadow-xl modal-container">
              <div className="max-w-md mx-auto bg-white overflow-hidden md:max-w-full">
                <span
                  className="flex mr-5 mt-2 justify-end cursor-pointer text-lg"
                  onClick={() => setShowModal(false)}
                >
                  x
                </span>
                <div className="md:flex container-product">
                  <div className="md:shrink-0 pl-10">
                    <Image
                      width={540}
                      height={540}
                      className="h-[100%] w-[full] object-cover md:w-[90%] container-image-product"
                      src={photo}
                      alt="Modern building architecture"
                    />
                  </div>
                  <div className="w-[40%] container-choose-product">
                    <div className="w-full text-left flex justify-start mt-2">
                      <div className="w-[50px] h-[60px]">
                        <span className="text-md bg-blue-light p-2">#{id}</span>
                      </div>
                      <span className="text-md">
                        {description} -{" "}
                        {Type == "no_rib"
                          ? "Panjang no RIB"
                          : Type == "panjang"
                          ? "Panjang + RIB"
                          : "Pendek"}
                      </span>
                    </div>
                    <div className="bg-blue-light max-w-[100%] text-sm">
                      <div className="text-left text-xl text-java-blue pl-2 pt-2">
                        Rp{Price}
                      </div>
                      <div className="text-left pl-2 italic text-gray-400 text-sm pb-1">
                        Jaminan produk berkualitas 100% Ori
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="container max-w-[100%] container-product-button text-sm">
                        <div className="flex justify-start text-gray-400 mt-1 mb-1">
                          Jenis Usia
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
                          <div
                            className={`flex border-2 rounded-md text-left text-java-blue pt-1 pb-1 pr-4 pl-4 cursor-pointer ${
                              Ages == "dewasa"
                                ? "bg-blue-light border-java-blue"
                                : "border-gray-200"
                            }`}
                            onClick={() => setAges("dewasa")}
                          >
                            <span>Dewasa</span>
                            {Ages == "dewasa" ? (
                              <Image src={CheckImg} className="ml-2" alt="" />
                            ) : (
                              ""
                            )}
                          </div>
                          <div
                            className={`flex border-2 rounded-md text-left text-java-blue pt-1 pb-1 pr-4 pl-4 cursor-pointer ${
                              Ages == "anak"
                                ? "bg-blue-light border-java-blue"
                                : "border-gray-200"
                            }`}
                            onClick={() => setAges("anak")}
                          >
                            <span>Anak</span>
                            {Ages == "anak" ? (
                              <Image src={CheckImg} className="ml-2" alt="" />
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="container max-w-[100%] container-product-button text-sm">
                        <div className="flex justify-start text-gray-400 mt-1 mb-1">
                          Bahan
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                          <div
                            className={`flex border-2 rounded-md text-left text-java-blue pt-1 pb-1 pr-4 pl-4 cursor-pointer ${
                              Material == "24s"
                                ? "bg-blue-light border-java-blue"
                                : "border-gray-200"
                            }`}
                            onClick={() => setMaterial("24s")}
                          >
                            <span>24S</span>
                            {Material == "24s" ? (
                              <Image src={CheckImg} className="ml-2" alt="" />
                            ) : (
                              ""
                            )}
                          </div>
                          <div
                            className={`flex border-2 rounded-md text-left text-java-blue pt-1 pb-1 pr-4 pl-4 cursor-pointer ${
                              Material == "30s"
                                ? "bg-blue-light border-java-blue"
                                : "border-gray-200"
                            }`}
                            onClick={() => setMaterial("30s")}
                          >
                            <span>30S</span>
                            {Material == "30s" ? (
                              <Image src={CheckImg} className="ml-2" alt="" />
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="container max-w-[100%] container-product-button text-sm">
                        <div className="flex justify-start text-gray-400 mt-1 mb-1">
                          Jenis
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                          <div
                            className={`flex border-2 rounded-md text-left text-java-blue pt-1 pb-1 pr-4 pl-4 cursor-pointer ${
                              Type == "pendek"
                                ? "bg-blue-light border-java-blue"
                                : "border-gray-200"
                            }`}
                            onClick={() => setType("pendek")}
                          >
                            <span>Pendek</span>
                            {Type == "pendek" ? (
                              <Image src={CheckImg} className="ml-2" alt="" />
                            ) : (
                              ""
                            )}
                          </div>

                          <div
                            className={`flex border-2 rounded-md text-left text-java-blue pt-1 pb-1 pr-4 pl-4 cursor-pointer ${
                              Type == "panjang"
                                ? "bg-blue-light border-java-blue"
                                : "border-gray-200"
                            }`}
                            onClick={() => setType("panjang")}
                          >
                            <span>Panjang</span>
                            {Type == "panjang" ? (
                              <Image src={CheckImg} className="ml-2" alt="" />
                            ) : (
                              ""
                            )}
                          </div>

                          <div
                            className={`flex border-2 rounded-md text-left text-java-blue pt-1 pb-1 pr-4 pl-4 cursor-pointer ${
                              Type == "no_rib"
                                ? "bg-blue-light border-java-blue"
                                : "border-gray-200"
                            }`}
                            onClick={() => setType("no_rib")}
                          >
                            <span>Panjang no RIB</span>
                            {Type == "no_rib" ? (
                              <Image src={CheckImg} className="ml-2" alt="" />
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-md mx-auto bg-white overflow-hidden md:max-w-[920px]">
                <div className="md:flex">
                  <div className="table-class mx-auto w-full pl-10 pr-10 flex justify-center">
                    <div className="flex justify-between w-full flex-wrap">
                      <div className="relative w-[400px] pb-4 overflow-x-auto  sm:-mx-6 lg:-mx-8  sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-gray-700 border-b border-black dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                              <td
                                scope="col"
                                className="px-8 py-1 text-xs text-gray-400"
                              >
                                Ukuran
                              </td>
                              <td
                                scope="col"
                                className="px-8 py-1 text-xs text-gray-400"
                              >
                                Harga
                              </td>
                              <td scope="col" className="text-xs text-gray-400">
                                Stok
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                              <td className="px-8 py-1 text-xs">XS</td>
                              <td className="px-8 py-2 text-xs">
                                {dataXS.length > 0
                                  ? dataXS.map((item, key) => {
                                      return <div key={key}>{item.price}</div>;
                                    })
                                  : "-"}
                              </td>
                              <td className="text-xs">
                                <label className="flex items-center">
                                  <span className="mr-4 text-java-blue  w-[20px]">
                                    {dataXS.length > 0
                                      ? dataXS.map((item, key) => {
                                          return (
                                            <div key={key}>{item.qty}</div>
                                          );
                                        })
                                      : "-"}
                                  </span>
                                  <input
                                    type="checkbox"
                                    className="accent-java-blue w-4 h-4"
                                    // disabled={item.qty == 0 ?? "true"}
                                    // onChange={(e) => handleAdult(item, e)}
                                    checked={size == "xs" ? true : false}
                                    onChange={() =>
                                      setItem([
                                        {
                                          size: "xs",
                                          price:
                                            dataXS.length > 0
                                              ? dataXS[0].price
                                              : 0,
                                          stock:
                                            dataXS.length > 0
                                              ? dataXS[0].qty
                                              : 0,
                                        },
                                      ])
                                    }
                                  />
                                </label>
                              </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                              <td className="px-8 py-1 text-xs">S</td>
                              <td className="px-8 py-2 text-xs">
                                {dataS.length > 0
                                  ? dataS.map((item, key) => {
                                      return <div key={key}>{item.price}</div>;
                                    })
                                  : "-"}
                              </td>
                              <td className="text-xs">
                                <label className="flex items-center">
                                  <span className="mr-4 text-java-blue  w-[20px]">
                                    {dataS.length > 0
                                      ? dataS.map((item, key) => {
                                          return (
                                            <div key={key}>{item.qty}</div>
                                          );
                                        })
                                      : "-"}
                                  </span>

                                  <input
                                    type="checkbox"
                                    className="accent-java-blue w-4 h-4"
                                    // disabled={item.qty == 0 ?? "true"}
                                    // onChange={(e) => handleAdult(item, e)}
                                    checked={size == "s" ? true : false}
                                    onChange={() =>
                                      setItem([
                                        {
                                          size: "s",
                                          price:
                                            dataS.length > 0
                                              ? dataS[0].price
                                              : 0,
                                          stock:
                                            dataS.length > 0 ? dataS[0].qty : 0,
                                        },
                                      ])
                                    }
                                  />
                                </label>
                              </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                              <td className="px-8 py-1 text-xs">M</td>
                              <td className="px-8 py-2 text-xs">
                                {dataM.length > 0
                                  ? dataM.map((item, key) => {
                                      return <div key={key}>{item.price}</div>;
                                    })
                                  : "-"}
                              </td>
                              <td className="text-xs">
                                <label className="flex items-center">
                                  <span className="mr-4 text-java-blue  w-[20px]">
                                    {dataM.length > 0
                                      ? dataM.map((item, key) => {
                                          return (
                                            <div key={key}>{item.qty}</div>
                                          );
                                        })
                                      : "-"}
                                  </span>
                                  <input
                                    type="checkbox"
                                    className="accent-java-blue w-4 h-4"
                                    // disabled={item.qty == 0 ?? "true"}
                                    // onChange={(e) => handleAdult(item, e)}
                                    checked={size == "m" ? true : false}
                                    onChange={() =>
                                      setItem([
                                        {
                                          size: "m",
                                          price:
                                            dataM.length > 0
                                              ? dataM[0].price
                                              : 0,
                                          stock:
                                            dataM.length > 0 ? dataM[0].qty : 0,
                                        },
                                      ])
                                    }
                                  />
                                </label>
                              </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                              <td className="px-8 py-1 text-xs">L</td>
                              <td className="px-8 py-2 text-xs">
                                {dataL.length > 0
                                  ? dataL.map((item, key) => {
                                      return <div key={key}>{item.price}</div>;
                                    })
                                  : "-"}
                              </td>
                              <td className="text-xs">
                                <label className="flex items-center">
                                  <span className="mr-4 text-java-blue  w-[20px]">
                                    {dataL.length > 0
                                      ? dataL.map((item, key) => {
                                          return (
                                            <div key={key}>{item.qty}</div>
                                          );
                                        })
                                      : "-"}
                                  </span>
                                  <input
                                    type="checkbox"
                                    className="accent-java-blue w-4 h-4"
                                    // disabled={item.qty == 0 ?? "true"}
                                    // onChange={(e) => handleAdult(item, e)}
                                    checked={size == "l" ? true : false}
                                    onChange={() =>
                                      setItem([
                                        {
                                          size: "l",
                                          price:
                                            dataL.length > 0
                                              ? dataL[0].price
                                              : 0,
                                          stock:
                                            dataL.length > 0 ? dataL[0].qty : 0,
                                        },
                                      ])
                                    }
                                  />
                                </label>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="relative w-[400px] overflow-x-auto  sm:-mx-6 lg:-mx-8  sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-gray-700 border-b border-black dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                              <td
                                scope="col"
                                className="px-8 py-1 text-xs text-gray-400"
                              >
                                Ukuran
                              </td>
                              <td
                                scope="col"
                                className="px-8 py-1 text-xs text-gray-400"
                              >
                                Harga
                              </td>
                              <td scope="col" className="text-xs text-gray-400">
                                Stok
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                              <td className="px-8 py-1 text-xs">XL</td>
                              <td className="px-8 py-2 text-xs">
                                {dataXL.length > 0
                                  ? dataXL.map((item, key) => {
                                      return <div key={key}>{item.price}</div>;
                                    })
                                  : "-"}
                              </td>
                              <td className="text-xs">
                                <label className="flex items-center">
                                  <span className="mr-4 text-java-blue  w-[20px]">
                                    {dataXL.length > 0
                                      ? dataXL.map((item, key) => {
                                          return (
                                            <div key={key}>{item.qty}</div>
                                          );
                                        })
                                      : "-"}
                                  </span>
                                  <input
                                    type="checkbox"
                                    className="accent-java-blue w-4 h-4"
                                    // disabled={item.qty == 0 ?? "true"}
                                    // onChange={(e) => handleAdult(item, e)}
                                    checked={size == "xl" ? true : false}
                                    onChange={() =>
                                      setItem([
                                        {
                                          size: "xl",
                                          price:
                                            dataXL.length > 0
                                              ? dataXL[0].price
                                              : 0,
                                          stock:
                                            dataXL.length > 0
                                              ? dataXL[0].qty
                                              : 0,
                                        },
                                      ])
                                    }
                                  />
                                </label>
                              </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                              <td className="px-8 py-1 text-xs">XXL</td>
                              <td className="px-8 py-2 text-xs">
                                {dataXXL.length > 0
                                  ? dataXXL.map((item, key) => {
                                      return <div key={key}>{item.price}</div>;
                                    })
                                  : "-"}
                              </td>
                              <td className="text-xs">
                                <label className="flex items-center">
                                  <span className="mr-4 text-java-blue  w-[20px]">
                                    {dataXXL.length > 0
                                      ? dataXXL.map((item, key) => {
                                          return (
                                            <div key={key}>{item.qty}</div>
                                          );
                                        })
                                      : "-"}
                                  </span>
                                  <input
                                    type="checkbox"
                                    className="accent-java-blue w-4 h-4"
                                    // disabled={item.qty == 0 ?? "true"}
                                    // onChange={(e) => handleAdult(item, e)}
                                    checked={size == "xxl" ? true : false}
                                    onChange={() =>
                                      setItem([
                                        {
                                          size: "xxl",
                                          price:
                                            dataXXL.length > 0
                                              ? dataXXL[0].price
                                              : 0,
                                          stock:
                                            dataXXL.length > 0
                                              ? dataXXL[0].qty
                                              : 0,
                                        },
                                      ])
                                    }
                                  />
                                </label>
                              </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                              <td className="px-8 py-1 text-xs">XXXL</td>
                              <td className="px-8 py-2 text-xs">
                                {dataXXXL.length > 0
                                  ? dataXXXL.map((item, key) => {
                                      return <div key={key}>{item.price}</div>;
                                    })
                                  : "-"}
                              </td>
                              <td className="text-xs">
                                <label className="flex items-center">
                                  <span className="mr-4 text-java-blue  w-[20px]">
                                    {dataXXXL.length > 0
                                      ? dataXXXL.map((item, key) => {
                                          return (
                                            <div key={key}>{item.qty}</div>
                                          );
                                        })
                                      : "-"}
                                  </span>
                                  <input
                                    type="checkbox"
                                    className="accent-java-blue w-4 h-4"
                                    // disabled={item.qty == 0 ?? "true"}
                                    // onChange={(e) => handleAdult(item, e)}
                                    checked={size == "xxxl" ? true : false}
                                    onChange={() =>
                                      setItem([
                                        {
                                          size: "xxxl",
                                          price:
                                            dataXXXL.length > 0
                                              ? dataXXXL[0].price
                                              : 0,
                                          stock:
                                            dataXXXL.length > 0
                                              ? dataXXXL[0].qty
                                              : 0,
                                        },
                                      ])
                                    }
                                  />
                                </label>
                              </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                              <td className="px-8 py-1 text-xs">XXXXL</td>
                              <td className="px-8 py-2 text-xs">
                                {dataXXXXL.length > 0
                                  ? dataXXXXL.map((item, key) => {
                                      return <div key={key}>{item.price}</div>;
                                    })
                                  : "-"}
                              </td>
                              <td className="text-xs">
                                <label className="flex items-center">
                                  <span className="mr-4 text-java-blue  w-[20px]">
                                    {dataXXXXL.length > 0
                                      ? dataXXXXL.map((item, key) => {
                                          return (
                                            <div key={key}>{item.qty}</div>
                                          );
                                        })
                                      : "-"}
                                  </span>
                                  <input
                                    type="checkbox"
                                    className="accent-java-blue w-4 h-4"
                                    checked={size == "xxxxl" ? true : false}
                                    onChange={() =>
                                      setItem([
                                        {
                                          size: "xxxxl",
                                          price:
                                            dataXXXXL.length > 0
                                              ? dataXXXXL[0].price
                                              : 0,
                                          stock:
                                            dataXXXXL.length > 0
                                              ? dataXXXXL[0].qty
                                              : 0,
                                        },
                                      ])
                                    }
                                  />
                                </label>
                              </td>
                            </tr>
                            {/* {DataDetail?.map((item, key) => (
                            <tr
                              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                              key={key}
                            >
                              <td className="px-8 py-1 text-xs" key={key}>
                                {item.size}
                              </td>
                              <td className="px-8 py-2 text-xs">
                                {item.price}
                              </td>
                              <td className="text-xs">
                                <label className="flex items-center">
                                  <span className="mr-4 text-java-blue  w-[20px]">
                                    {item.qty}
                                  </span>
                                  <input
                                    type="checkbox"
                                    className="accent-java-blue w-4 h-4"
                                    disabled={item.qty == 0 ?? "true"}
                                    onChange={(e) => handleAdult(item, e)}
                                    checked={item.size == Check ? true : false}
                                  />
                                </label>
                              </td>
                            </tr>
                          ))} */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between bg-gray-100 flex-wrap wrapper-footers">
                <div className="flex mt-4 break-words ml-10 text-sm text-gray-500">
                  Perubahan data stok terakhir: 09 Januari 2023
                </div>
                <div className="mr-7 flex justify-center text-sm mt-1 mb-1 items-center p-1 wrapper-footers-button">
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-java-blue p-2 pl-3 pr-3 rounded-md"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={() => redirectWhatsApp(Item)}
                    className="bg-java-blue text-white p-1 pl-2 pr-2 rounded-md ml-4"
                  >
                    Beli Sekarang
                  </button>
                </div>
              </div>
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
