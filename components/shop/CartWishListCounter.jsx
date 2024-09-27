"use client";
import React from "react";
import { useAppContext } from "../productContextProvider/ProductContextProvider";
import { useRouter } from 'next/navigation'
export default function CartWishListCounter() {
  const { cartCount, wishListCount } = useAppContext();


  const router = useRouter();

  const handleNavigationWishList = () => {
      router.push('/wishlist'); 
  };
  const handleNavigationCart = () => {
      router.push('/cart'); 
  };
  const handleNavigationAccount = () => {
      router.push('/account'); 
  };


  return (
    <div>
      <div className="flex items-center space-x-4">
        <button className="text-center text-gray-700 hover:text-primary transition relative" onClick={handleNavigationWishList}>
          <div className="text-2xl">
            <i className="fa-regular fa-heart"></i>
          </div>
          <div className="text-xs leading-3 pr-6">Wishlist</div>
          <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-[#00A9E1] text-white text-xs">
            {wishListCount}
          </div>
        </button>
        <button className="text-center text-gray-700 hover:text-primary transition relative" onClick={handleNavigationCart}>
          <div className="text-2xl">
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
          <div className="text-xs leading-3 pr-3">Cart</div>
          <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-[#00A9E1] text-white text-xs">
            {cartCount}
          </div>
        </button>
        <button className="text-center text-gray-700 hover:text-primary transition relative">
          <div className="text-2xl">
            <i className="fa-regular fa-user"></i>
          </div>
          <div className="text-xs leading-3" onClick={handleNavigationAccount}>Account</div>
        </button>
      </div>
    </div>
  );
}