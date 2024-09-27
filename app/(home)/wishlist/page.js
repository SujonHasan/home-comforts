import { auth } from '@/auth';
import Breadcrumb from '@/components/Breadcrumb';
import Wishlist from '@/components/Wishlist'
import { redirect } from 'next/navigation';
import React from 'react'

export const metadata = {
    title: "Wishlist - Home Comforts",
    description: "This is Home Comforts project",
  };

async function WishlistPage() {

  const session = await auth();
  const user = session?.user;
  
  if(!user) {
    redirect("/login?callbackUrl=/wishlist")
  }
  
  return (
    <>
      <Breadcrumb name="profile"/>
      <Wishlist/>
    </>
  )
}

export default WishlistPage