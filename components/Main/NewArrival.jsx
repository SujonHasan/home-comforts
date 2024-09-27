import { product1, product2, product3, product4 } from '@/assets'
import { getAllProducts } from '@/db/queries'
import Image from 'next/image'
import React from 'react'
import Shopcart from '../shop/Shopcart';

async function NewArrival() {

    const products = await getAllProducts();
    const uniqueProducts = Array.from(new Map(products.map(product => [product.category._id, product])).values());

  return (
    <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {uniqueProducts.map(product => <Shopcart key={product._id} product={product} />)}
        </div>
    </div>
  )
}

export default NewArrival