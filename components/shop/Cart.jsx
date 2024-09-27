"use client";
import { product10, product5, product6 } from "@/assets";
import Image from "next/image";
import React from "react";
import { useAppContext } from "../productContextProvider/ProductContextProvider";
import { useRouter } from "next/navigation";

function Cart() {
  const { cart, productDeletedCart,quantity } = useAppContext();
  const router = useRouter();

  const handleNavigationCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="container gap-6 pt-4 pb-16">
      {cart.length !== 0 ? (
        <div className="mx-auto space-y-4 m w-full">
          {cart.map((cartList, index) => (
            <div
              key={index}
              className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded"
            >
              <div className="w-28">
                <Image
                  src={cartList.thumbnail}
                  alt="product 6"
                  width={112}
                  height={80}
                />
              </div>
              <div className="w-1/3">
                <h2 className="text-gray-800 text-xl font-medium uppercase">
                  {cartList.name}
                </h2>
                <p className="text-gray-500 text-sm">
                  Availability:
                  {cartList.quantity > 0 ? (
                    <span className="text-green-600">In Stock</span>
                  ) : (
                    <span className="text-primary">Stock Out</span>
                  )}
                </p>
              </div>
              <div className="text-[#000] text-lg font-semibold">
                x{cartList.quantity} 
              </div>
              <div className="text-[#00A9E1] text-lg font-semibold">
                {cartList.discountPrice} tk
              </div>
           
              <div
                className="text-gray-600 cursor-pointer hover:text-primary"
                onClick={() => productDeletedCart(cartList)}
              >
                {/* <i className="fa-solid fa-trash"></i> */}
                <p className="text-primary">Remove</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="flex justify-center text-primary text-2xl ">
          Product is Not Available in the Cart
        </h1>
      )}

      <div className="flex justify-end mt-[20px]">
        <button
          onClick={handleNavigationCheckout}
          className="px-6 py-4 text-center text-sm text-white bg-[#00A9E1] border border-slate-500 rounded hover:bg-transparent hover:text-slate-950 transition uppercase font-roboto font-medium"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;