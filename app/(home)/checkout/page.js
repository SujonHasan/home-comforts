import { auth } from '@/auth';
import Breadcrumb from '@/components/Breadcrumb'
import Checkout from '@/components/Checkout'
import { redirect } from 'next/navigation';
import React from 'react'

export const metadata = {
  title: "Checkout - Home Comforts",
  description: "This is Home Comforts project",
};

async function CheckOutPage() {

  const session = await auth();
  const user = session?.user;
  
  if(!user) {
    redirect("/login?callbackUrl=/checkout")
  }

  return (
    <>
        <Breadcrumb name="Checkout" />
        <Checkout/>
    </>
  )
}

export default CheckOutPage