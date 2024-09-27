import { product1, product2, product3, product4 } from '@/assets'
import { getAllCategoryProduct, getProduct } from '@/db/queries'
import Image from 'next/image'
import React from 'react'
import Shopcart from '../shop/Shopcart';

async function RelatedProducts({categoryId, productId}) {

    const categoryProducts = await getAllCategoryProduct(categoryId);

  return (
    <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Related products</h2>
        <div className="grid grid-cols-4 gap-6">
            { categoryProducts.filter(product => product._id !== productId).map(product => <Shopcart key={product._id} product={product} />)}
        </div>
    </div>
  )
}

export default RelatedProducts