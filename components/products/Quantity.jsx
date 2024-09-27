"use client";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../productContextProvider/ProductContextProvider";

function Quantity({product}) {

  const { quantity, setQuantity } = useAppContext();
  console.log(quantity)
  useEffect(() => {
    const initialQuantity = sessionStorage.getItem(`quantity_${product._id}`);
    if (initialQuantity !== null) {
      setQuantity(parseInt(initialQuantity));
    }
  }, [product._id, setQuantity]);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((preQuentity) => preQuentity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity((preQuentity) => preQuentity + 1);
  };
  useEffect(() => {
    sessionStorage.setItem(`quantity_${product._id}`, quantity);
  }, [product._id, quantity]);

  return (
    <div className="mt-4">
      <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
      <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
        {product.quantity === 0 ? (
          <button
            disable
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            onClick={() => handleDecrement(product._id)}
          >
            -
          </button>
        ) : (
          <button
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            onClick={() => handleDecrement(product._id)}
          >
            -
          </button>
        )}

        <div className="h-8 w-8 text-base flex items-center justify-center">
          {quantity}
        </div>

        {product.quantity === 0 ? (
          <button
            disable
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            onClick={handleIncrement}
          >
            +
          </button>
        ) : (
          <button
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
            onClick={handleIncrement}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
}

export default Quantity;
