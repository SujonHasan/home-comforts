import {logo } from '@/assets'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#232F3E] pt-16 pb-12 border-t border-gray-100">
        <div className="container grid md:grid-cols-3 items-center justify-center gap-3">

            <div className="col-span-2 grid grid-cols-2 gap-8">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">HELP ZONE</h3>
                        <div className="mt-4 space-y-4">
                            <a href="#" className="text-base text-gray-400 hover:text-gray-100 block">FAQ</a>
                            <a href="#" className="text-base text-gray-400 hover:text-gray-100 block">Reviews</a>
                            <a href="#" className="text-base text-gray-400 hover:text-gray-100 block">Feedback</a>
                            <a href="#" className="text-base text-gray-400 hover:text-gray-100 block">EMI Facility</a>
                            <a href="#" className="text-base text-gray-400 hover:text-gray-100 block">Payment Guides</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">USEFULL LINKS</h3>
                        <div className="mt-4 space-y-4">
                            <a href="#" className="text-base text-gray-400 hover:text-gray-100 block">Terms & Conditions</a>
                            <a href="#" className="text-base text-gray-400 hover:text-gray-100 block">Returns & Refund</a>
                            <a href="#" className="text-base text-gray-400 hover:text-gray-100 block">Privacy Policy</a>
                            <a href="#" className="text-base text-gray-400 hover:text-gray-100 block">Contact Us</a>
                            <a href="#" className="text-base text-gray-400 hover:text-gray-100 block">About Us</a>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">Solutions</h3>
                        <div className="mt-4 space-y-4">
                            <a href="#" className="text-base text-gray-400 hover:text-gray-100 block">Marketing</a>
                            <a href="#" className="text-base text-gray-400 hover:text-gray-100 block">Analitycs</a>
                            <a href="#" className="text-base text-gray-400 hover:text-gray-100 block">Commerce</a>
                            <a href="#" className="text-base text-gray-400 hover:text-gray-100 block">Insights</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-1 space-y-8 mr-2 text-center">
                <Image src={logo} width={250}
              height={250} alt="logo" className="w-30"/>
                {/* <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-gray-500"><i
                            className="fa-brands fa-facebook-square"></i></a>
                    <a href="#" className="text-gray-400 hover:text-gray-500"><i
                            className="fa-brands fa-instagram-square"></i></a>
                    <a href="#" className="text-gray-400 hover:text-gray-500"><i
                            className="fa-brands fa-twitter-square"></i></a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                </div> */}
            </div>
        </div>
    </footer>
  )
}

export default Footer