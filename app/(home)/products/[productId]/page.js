import Breadcrumb from '@/components/Breadcrumb';
import ProductDetails from '@/components/products/ProductDetails'
import RelatedProducts from '@/components/products/RelatedProducts';
import { getProduct } from '@/db/queries';
import React from 'react'

export const metadata = {
  title: "Product - Home Comforts",
  description: "This is Home Comforts project",
};

async function ProductPage({ params: { productId } }) {

  const product = await getProduct(productId);


  return (
    <>
        <Breadcrumb name="Product"/>
        <ProductDetails product={product} />
        <RelatedProducts categoryId={product?.category?._id} productId={productId} />
    </>
  )
}

export default ProductPage