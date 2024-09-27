"use client";
import React, { useEffect, useState } from "react";
import Shopcart from "./Shopcart";
import { useAppContext } from "../productContextProvider/ProductContextProvider";

function FilterShop({ products }) {
  const { searchQuery , checkCategory, priceRange} = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(()=>{

    const activeCategories = Object.keys(checkCategory).filter(category => checkCategory[category]);

    let filtered = products;

    if(searchQuery){
      filtered = filtered.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.category.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }else if(activeCategories.length > 0){

      filtered = filtered.filter((product) => activeCategories.includes(product.category.name));
    }

    
    if(priceRange.min || priceRange.max){

      const min = parseFloat(priceRange.min) || 0;
      const max = parseFloat(priceRange.max) || Infinity;
      filtered = filtered.filter((product) => {
        const price = parseFloat(product.discountPrice);
        return price >= min && price <= max
      })

    }

    setFilteredProducts(filtered)
    setCurrentPage(1);

  }, [searchQuery, checkCategory, products, priceRange])

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) =>{
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
        {currentItems.map((product) => (
          <Shopcart key={product._id} product={product} />
        ))}
      </div>
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default FilterShop;
