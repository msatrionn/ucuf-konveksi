import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header";
import CardListProduct from "./components/CardListProduct";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <title>Shop</title>
      <meta name="description" content="Generated by Shop" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <Header />
      <div className="text-center m-10">
        {/* <div className="flex justify-center">
          <div className="flex justify-center p-5 rounded-md bg-white max-w-[800px] shadow-md">
            <div className="flex">
              <label className="flex items-center ml-10">
                <input type="checkbox" className="accent-java-blue w-4 h-4" />
                <span className="ml-4 text-java-blue">Customized</span>
              </label>
              <label className="flex items-center ml-10">
                <input type="checkbox" className="accent-java-blue w-4 h-4" />
                <span className="ml-4 text-java-blue">
                  Lengan panjang + RIB
                </span>
              </label>
              <label className="flex items-center ml-10">
                <input type="checkbox" className="accent-java-blue w-4 h-4" />
                <span className="ml-4 text-java-blue">
                  Lengan panjang Tanpa RIB
                </span>
              </label>
            </div>
          </div>
        </div> */}
        <div>
          <CardListProduct />
        </div>
      </div>
      <Footer />
    </>
  );
}
