import Shopcart from '@/components/shop/Shopcart';
import { getAllCategoryProduct } from '@/db/queries';
import React from 'react'

export const metadata = {
  title: "Category - Home Comforts",
  description: "This is Home Comforts project",
};

async function CategoryPage({params: {categoryId}}) {

  const categoryProducts = await getAllCategoryProduct(categoryId);

  return (
    <div className="container pb-16 py-5 relative">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">{categoryProducts[0].category.name} products</h2>
        <div className="grid grid-cols-4 gap-6">
            { categoryProducts.map(product => <Shopcart key={product._id} product={product} />)}
        </div>
    </div>
  )
}

export default CategoryPage