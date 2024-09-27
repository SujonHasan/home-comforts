"use client";
import React from "react";
import { useAppContext } from "../productContextProvider/ProductContextProvider";

export default function Search() {

    const { setSearchQuery } = useAppContext();

    const handleSearch = e => {
      setSearchQuery(e.target.value);
    };
  

  return (
    <div className="w-full max-w-xl relative flex">
      <span className="absolute left-4 top-3 text-lg text-gray-400">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <input
        type="text"
        name="search"
        id="search"
        className="w-full border border-slate-300 border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
        placeholder="search"
        onChange={handleSearch}
      />
      <button className="bg-[#00A9E1] border border-slate-300 text-white px-8 rounded-r-md hover:bg-transparent hover:text-slate-950 transition hidden md:flex pt-[10px]">
        Search
      </button>
    </div>
  );
}
