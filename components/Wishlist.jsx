"use client";

import { product10, product5, product6 } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import { useAppContext } from "./productContextProvider/ProductContextProvider";

function Wishlist() {
  const { wishList, addToCart ,productDeleted} = useAppContext();

  const handleToCart = (product) => {
    addToCart(product);
    console.log("product info", product)
  };

  const deletedCartProduct = (product) => {
    handleToCart(product)
    productDeleted(product)

  }


  
  return (
    <div className="container gap-6 pt-4 pb-16">
 {
  wishList.length !== 0 ?
  (
    <div className="mx-auto space-y-4 max-w-6xl">
    {wishList.map((product, index) => (
      <div
        key={index}
        className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded"
      >
        <div className="w-28">
          <Image
            src={product.image}
            alt="product 6"
            width={112}
            height={80}
          />
        </div>
        <div className="w-1/3">
          <h2 className="text-gray-800 text-xl font-medium uppercase">
            {product.name}
          </h2>
          <p className="text-gray-500 text-sm">
          Availability:{" "}
            {product.quantity > 0 ? (
              <span className="text-green-600">In Stock</span>
            ) : (
              <span className="text-primary">Stock Out</span>
            )}
          </p>
        </div>
        <div className="text-[#00A9E1] text-lg font-semibold">
          ${product.regularPrice}
        </div>
      
         <button
         onClick={() => deletedCartProduct(product)}
        disabled={product.quantity === 0}
         className="px-6 py-2 text-center text-sm text-white bg-slate-500 border border-slate-500 rounded hover:bg-transparent hover:text-slate-950 transition uppercase font-roboto font-medium"
       >
         Add to Cart
       </button>
      
        <div
          className="text-gray-600 cursor-pointer hover:text-primary"
          onClick={() => productDeleted(product)}
        >
          {/* <i className="fa-solid fa-trash"></i> */} <p className="text-primary">Remove</p>
        </div>
      </div>
    ))}
  </div>
  ) : (
    <h1 className="flex justify-center text-primary text-2xl ">
    Product is Not Available in the WishList
  </h1>
  )
 }
    </div>
  );
}

export default Wishlist;
