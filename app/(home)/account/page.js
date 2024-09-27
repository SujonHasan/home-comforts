import { auth } from '@/auth';
import Breadcrumb from '@/components/Breadcrumb'
import Account from '@/components/profile/Account'
import { redirect } from 'next/navigation';
import React from 'react'

export const metadata = {
  title: "Account - Home Comforts",
  description: "This is Home Comforts project",
};

async function AccountPage() {

  const session = await auth();
  const user = session?.user;
  
  if(!user) {
    redirect("/login?callbackUrl=/account")
  }

  return (
    <>
        <Breadcrumb name="Account" />
        <Account user={user} />
    </>
  )
}

export default AccountPage