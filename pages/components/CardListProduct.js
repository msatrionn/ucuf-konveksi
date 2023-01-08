import React, { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import Brown from "../../public/image/brown.jpg";
import Black from "../../public/image/black.jpg";
import White from "../../public/image/white.jpg";
import Maroon from "../../public/image/maroon.jpg";
import Blue from "../../public/image/blue.jpg";

const CardListProduct = () => {
  const [datas, setDatas] = useState([]);
  const data = [
    {
      id: 1,
      title: "Blue Tshirt",
      colorName: "blue",
      color: Blue,
      price: "28",
      promoprice: "28",
      promoPrice: "24",
      details: [
        {
          age: "adult",
          size: [
            { name: "xs", qty: 4 },
            { name: "s", qty: 2 },
            { name: "m", qty: 10 },
            { name: "l", qty: 0 },
            { name: "xl", qty: 4 },
            { name: "xxl", qty: 5 },
            { name: "xxxl", qty: 0 },
            { name: "xxxxl", qty: 2 },
            { name: "xxxxxl", qty: 2 },
          ],
        },
        {
          age: "child",
          size: [
            { name: "xs", qty: 4 },
            { name: "s", qty: 2 },
            { name: "m", qty: 2 },
            { name: "l", qty: 2 },
            { name: "xl", qty: 2 },
            { name: "xxl", qty: 5 },
            { name: "xxxl", qty: 0 },
            { name: "xxxxl", qty: 2 },
            { name: "xxxxxl", qty: 2 },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Maroon Tshirt",
      colorName: "maroon",
      color: Maroon,
      price: "28",
      promoprice: "28",
      promoPrice: "24",
      details: [
        {
          age: "adult",
          size: [
            { name: "xs", qty: 4 },
            { name: "s", qty: 2 },
            { name: "m", qty: 2 },
            { name: "l", qty: 2 },
            { name: "xl", qty: 2 },
            { name: "xxl", qty: 5 },
            { name: "xxxl", qty: 0 },
            { name: "xxxxl", qty: 2 },
            { name: "xxxxxl", qty: 2 },
          ],
        },
        {
          age: "child",
          size: [
            { name: "xs", qty: 4 },
            { name: "s", qty: 2 },
            { name: "m", qty: 2 },
            { name: "l", qty: 2 },
            { name: "xl", qty: 2 },
            { name: "xxl", qty: 5 },
            { name: "xxxl", qty: 0 },
            { name: "xxxxl", qty: 2 },
            { name: "xxxxxl", qty: 2 },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Black Tshirt",
      colorName: "black",
      color: Black,
      price: "28",
      promoPrice: "24",
      details: [
        {
          age: "adult",
          size: [
            { name: "xs", qty: 4 },
            { name: "s", qty: 2 },
            { name: "m", qty: 2 },
            { name: "l", qty: 2 },
            { name: "xl", qty: 2 },
            { name: "xxl", qty: 5 },
            { name: "xxxl", qty: 0 },
            { name: "xxxxl", qty: 2 },
            { name: "xxxxxl", qty: 2 },
          ],
        },
        {
          age: "child",
          size: [
            { name: "xs", qty: 4 },
            { name: "s", qty: 2 },
            { name: "m", qty: 2 },
            { name: "l", qty: 2 },
            { name: "xl", qty: 2 },
            { name: "xxl", qty: 5 },
            { name: "xxxl", qty: 0 },
            { name: "xxxxl", qty: 2 },
            { name: "xxxxxl", qty: 2 },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "White Tshirt",
      colorName: "white",
      color: White,
      price: "28",
      promoPrice: "24",
      details: [
        {
          age: "adult",
          size: [
            { name: "xs", qty: 4 },
            { name: "s", qty: 2 },
            { name: "m", qty: 2 },
            { name: "l", qty: 2 },
            { name: "xl", qty: 2 },
            { name: "xxl", qty: 5 },
            { name: "xxxl", qty: 0 },
            { name: "xxxxl", qty: 2 },
            { name: "xxxxxl", qty: 2 },
          ],
        },
        {
          age: "child",
          size: [
            { name: "xs", qty: 4 },
            { name: "s", qty: 2 },
            { name: "m", qty: 2 },
            { name: "l", qty: 2 },
            { name: "xl", qty: 2 },
            { name: "xxl", qty: 5 },
            { name: "xxxl", qty: 0 },
            { name: "xxxxl", qty: 2 },
            { name: "xxxxxl", qty: 2 },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Brown Tshirt",
      colorName: "brown",
      color: Brown,
      price: "28",
      promoPrice: "24",
      details: [
        {
          age: "adult",
          size: [
            { name: "xs", qty: 4 },
            { name: "s", qty: 2 },
            { name: "m", qty: 2 },
            { name: "l", qty: 2 },
            { name: "xl", qty: 0 },
            { name: "xxl", qty: 5 },
            { name: "xxxl", qty: 0 },
            { name: "xxxxl", qty: 2 },
            { name: "xxxxxl", qty: 2 },
          ],
        },
        {
          age: "child",
          size: [
            { name: "xs", qty: 4 },
            { name: "s", qty: 2 },
            { name: "m", qty: 2 },
            { name: "l", qty: 10 },
            { name: "xl", qty: 2 },
            { name: "xxl", qty: 5 },
            { name: "xxxl", qty: 0 },
            { name: "xxxxl", qty: 2 },
            { name: "xxxxxl", qty: 2 },
          ],
        },
      ],
    },
  ];
  useEffect(() => {
    setDatas(data);
  }, []);

  return (
    <div>
      <>
        <div className="flex flex-wrap justify-center">
          {datas.map((item) => {
            return (
              <div key={item.id}>
                <CardProduct
                  id={item.id}
                  color={item.color}
                  colorName={item.colorName}
                  price={item.price}
                  item={item}
                  details={item.details}
                  promoPrice={item.promoPrice}
                />
                {/* <ModalDetailProduct item={item} details={item.details} /> */}
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default CardListProduct;
