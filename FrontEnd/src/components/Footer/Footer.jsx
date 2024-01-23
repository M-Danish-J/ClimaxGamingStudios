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
                <span> | Privacy Policy | Terms of Service</span>
            </div>
            <div className="flex items-center gap-3">
                <TiSocialFacebook size={24} />
                <TiSocialTwitter size={24} />
                <IoLogoInstagram size={24} />
                <FaLinkedinIn size={24} />
            </div>
        </div>
    )
}
