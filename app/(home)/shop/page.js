import Breadcrumb from '@/components/Breadcrumb';
import Shop from '@/components/shop/Shop';
import React from 'react'

export const metadata = {
    title: "Shop Page - Home Comforts",
    description: "This is Home Comforts project",
  };

function ShopPage() {
  return (
    <>
        <Breadcrumb name="Shop" />
        <Shop/>
    </>
  )
}

export default ShopPage