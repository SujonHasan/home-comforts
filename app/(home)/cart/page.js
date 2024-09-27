import { auth } from '@/auth';
import Breadcrumb from '@/components/Breadcrumb';
import Cart from '@/components/shop/Cart';
import { redirect } from 'next/navigation';
// import Cart from '@/components/cart'
import React from 'react'

export const metadata = {
    title: "Cart - Home Comforts",
    description: "This is Home Comforts project",
  };

async function CartPage() {

  const session = await auth();
  const user = session?.user;
  
  if(!user) {
    redirect("/login?callbackUrl=/cart")
  }

  return (
    <>
      <Breadcrumb name="cart"/>
      <Cart/>
    </>
  )
}

export default CartPage