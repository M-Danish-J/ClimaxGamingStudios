import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='mt-56 gap-4 py-4 border-t-2 border-[#ff7e00] flex flex-col lg:flex-row lg:justify-between lg:px-20 xl:px-[10vw] items-center justify-center'>
            <div className="px-5 text-center">
                <span>© Mindstorm Studios 2024</span>
                <span> | </span><span className='cursor-pointer hover:underline'>Privacy Policy</span> | <span className='cursor-pointer hover:underline'>Terms of Service</span>
            </div>
            <div className="flex items-center gap-3">
                <TiSocialFacebook className='hover:text-[#ff7e00] cursor-pointer' size={24} />
                <TiSocialTwitter className='hover:text-[#ff7e00] cursor-pointer' size={24} />
                <IoLogoInstagram className='hover:text-[#ff7e00] cursor-pointer' size={24} />
                <FaLinkedinIn className='hover:text-[#ff7e00] cursor-pointer' size={24} />
            </div>
        </div>
    )
}
