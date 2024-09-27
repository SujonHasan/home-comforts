// import {logo } from "@/assets";
import Image from "next/image";
import Search from "./shop/Search";
import CartWishListCounter from "./shop/CartWishListCounter";

async function Header({ sideMenu }) {

  return (
    <header className="py-4 shadow-sm bg-white">
      {sideMenu && (
        <div className="container flex items-center justify-between">
          <a href="/">
            {/* <Image
              src={homeComforts}
              width={20}
              height={20}
              alt="Logo"
              className="w-20"
            /> */}
            <h1 className="font-bold text-3xl text-[#00A9E1] font-mono">Home Comforts</h1>
          </a>
            <Search/>

          <CartWishListCounter/>
        </div>
      )}
    </header>
  );
}

export default Header;
