import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";

const CardProduct = ({
  id,
  keys,
  colorName,
  color,
  price,
  promoPrice,
  item,
  details,
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
            <div className="relative overflow-hidden">
              <Image
                className="h-96 w-full object-cover"
                src={color}
                key={keys}
                alt=""
                priority
              />
              <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button
                  className="bg-java-blue text-white active:bg-java-blue font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Order
                </button>
              </div>
            </div>
            <h2 className="mt-3 text-xl capitalize" key={keys}>
              {colorName}
            </h2>
            <del className="text-red-700 text-lg">${price}</del>
            <p className="text-xl mt-2 ml-1 inline-block">${promoPrice}</p>
          </Fragment>
        </div>
      </section>
      {/* modal */}

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[100%] bg-white outline-none focus:outline-none ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold w-[100%]">
                    {item.title}
                  </h3>

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative mx-auto mt-2">
                  <p className="text-slate-500 text-lg leading-relaxed">
                    <Image src={item.color} alt="" width={400} height={400} />
                  </p>
                </div>
                <div className="w-[1000px] flex justify-center mt-4">
                  <div className="flex-wrap">
                    <div className="flex mx-auto w-[400px] mb-2">
                      <div className="flex justify-between w-[400px]">
                        <>
                          <div
                            className={`flex justify-center rounded w-[150px] text-black cursor-pointer ${
                              age == "adult"
                                ? "border-2 border-java-blue"
                                : "border-2 border-gray-200"
                            }`}
                            onClick={handleAdult}
                          >
                            Adult
                          </div>
                          <div
                            className={`flex justify-center rounded w-[150px] text-black cursor-pointer ${
                              age == "child"
                                ? "border-2 border-java-blue"
                                : "border-2 border-gray-200"
                            }`}
                            onClick={handleChild}
                          >
                            Child
                          </div>
                        </>
                      </div>
                    </div>
                    <div className="w-[400px]">
                      <>
                        <div className="">
                          {details?.map((detail) => {
                            return (
                              <>
                                {detail.size?.map((item) => (
                                  <>
                                    <button
                                      className={`${
                                        item.qty > 0
                                          ? "bg-java-blue border-2 border-java-blue cursor-pointer"
                                          : "bg-java-blue-200 border-2 border-java-blue"
                                      } text-white font-bold py-2 px-4 rounded m-2 ${
                                        item.name == size
                                          ? "bg-white border-2 border-java-blue text-java-blue cursor-pointer"
                                          : ""
                                      }`}
                                      onClick={() =>
                                        handleSetData(item.name, item.qty)
                                      }
                                      disabled={item.qty > 0 ? false : true}
                                    >
                                      {item.name} : {item.qty}
                                    </button>
                                  </>
                                ))}
                              </>
                            );
                          })}
                        </div>
                      </>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center border-t border-solid border-slate-200 rounded-b w-[100%] h-[80px] pr-4">
                  <button
                    className="text-black-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-white text-java-blue active:bg-java-blue active:text-white font-bold uppercase border-2 border-java-blue text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-java-blue focus:outline-java-blue mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => redirectWhatsApp()}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default CardProduct;
