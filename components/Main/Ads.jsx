import { offer } from '@/assets'
import Image from 'next/image'
import React from 'react'

function Ads() {
  return (
    <div className="container pb-16">
        <a href="#">
            <Image src={offer} alt="ads" className="w-full"/>
        </a>
    </div>
  )
}

export default Ads