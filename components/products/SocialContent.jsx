'use client'
import React from 'react'
import { FacebookIcon, FacebookShareButton, InstapaperIcon, InstapaperShareButton, TwitterIcon, TwitterShareButton } from "react-share";

function SocialContent({productId}) {
  return (
    <div className="flex gap-3 mt-4">
            <FacebookShareButton url={`http://localhost:3000/products/${productId}`} >
                <FacebookIcon round={true} size={32} />
            </FacebookShareButton>
            <TwitterShareButton url={`http://localhost:3000/products/${productId}`} >
                <TwitterIcon round={true} size={32} />
            </TwitterShareButton>
            <InstapaperShareButton url={`http://localhost:3000/products/${productId}`} >
                <InstapaperIcon round={true} size={32} />
            </InstapaperShareButton>
            
          </div>
  )
}

export default SocialContent