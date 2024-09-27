
import { bed,sofa, livingroom,outdoor, mattress, kitchen } from '@/assets'
import { getAllCategoris, getAllProducts } from '@/db/queries'
import Image from 'next/image'
import React from 'react'
import SIgnInOut from './auth/LogOut'
import { auth } from '@/auth'
import Link from 'next/link'
import LogOut from './auth/LogOut'

async function Navbar({sideMenu}) {

    const session = await auth();
    const categories = await getAllCategoris();

    const categoryImages = {
        bed,
        sofa,
        livingroom,
        outdoor,
        mattress,
        kitchen
      };

  return (
    <nav className="bg-gray-800">
        {sideMenu && (
            <div className="container flex">
            <div className="px-8 py-4 bg-[#00A9E1] md:flex items-center cursor-pointer relative group hidden">
                <span className="text-white">
                    <i className="fa-solid fa-bars"></i>
                </span>
                <span className="capitalize ml-2 text-white">All Categories</span>

                <div className="absolute z-10 left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px]"
                    style={{ width: `${300}px` } } >

                    { categories.map((category, index) => (
                        <a key={index} href={`/categories/${category._id}`} className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <Image src={categoryImages[category.name]} width={5} height={5} alt={category.name} className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">{category.name}</span>
                    </a>
                    ))

                    }

                </div>
            </div>

            <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
                <div className="flex items-center space-x-6 capitalize">
                    <a href="/" className="text-gray-200 hover:text-white transition">Home</a>
                    <a href="/shop" className="text-gray-200 hover:text-white transition">Shop</a>
                    <a href="/" className="text-gray-200 hover:text-white transition">About us</a>
                    <a href="/" className="text-gray-200 hover:text-white transition">Contact us</a>
                </div>
                <div className="my-2">
                    {session?.user ? (
                        <>
                        <span className="text-gray-200 hover:text-white transition">
                            hello , <span className="font-bold">{session.user.name}</span>{" "}
                        </span>
                        <LogOut/>
                        </>
                    ) : (
                        <Link
                        href="/login"
                        className="text-gray-200 hover:text-white transition"
                        >
                        Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
        )}
    </nav>
  )
}

export default Navbar