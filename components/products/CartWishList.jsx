"use client";

import React from "react";
import { useAppContext } from "../productContextProvider/ProductContextProvider";

export default function CartWishList({ product }) {

  const { addToCart, addToWishList ,quantity,setQuantity} = useAppContext();

  const handleToCart = (e) => {
    e.stopPropagation();
    const newProduct = {...product,quantity}
    // console.log(newProduct)
    addToCart(newProduct);
    setQuantity(1)
  };
  const handleToWishList = (e) => {
    e.stopPropagation();
    const newProduct = {...product,quantity}
    addToWishList(newProduct);
    setQuantity(1)
  };

  return (
    <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
      <button
        disabled={product.quantity === 0}
        onClick={handleToCart}
        className="bg-slate-500 border border-slate-500 text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-slate-950 transition"
      >
        <i className="fa-solid fa-bag-shopping"></i> Add to cart
      </button>
      <button
        onClick={handleToWishList}
        className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
      >
        <i className="fa-solid fa-heart"></i> Wishlist
      </button>
    </div>
  );
}