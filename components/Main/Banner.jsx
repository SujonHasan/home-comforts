
import { banner } from '@/assets'
// import banner from '../../assets/images/banner-bg.jpg'
import React from 'react'

function Banner() {
  return (
    <div className="bg-cover bg-no-repeat bg-center py-36" style={{backgroundImage: `url(${banner})`}}>
        <div className="container">
            <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
            Transform Your Home <br/>  with Comfort & Style
            </h1>
            <p>Explore our collection of premium home essentials designed to make every room cozy, stylish, and uniquely yours.</p>
            <div className="mt-12">
                <a href="#" className="bg-[#00A9E1] border border-slate-300 text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-slate-950">Shop Now</a>
            </div>
        </div>
    </div>
  )
}

export default Banner
