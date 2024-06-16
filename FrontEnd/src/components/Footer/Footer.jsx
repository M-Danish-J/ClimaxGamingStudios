import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { CiYoutube } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='mt-56 gap-4 py-4 border-t-2 border-[#ff7e00] flex flex-col lg:flex-row lg:justify-between lg:px-20 xl:px-[10vw] items-center justify-center'>
            <div className="px-5 text-center">
                <span>© Mindstorm Studios 2024</span>
                <span> | </span><span className='cursor-pointer hover:underline'>Privacy Policy</span> | <span className='cursor-pointer hover:underline'>Terms of Service</span>
            </div>
            <div className="flex items-center gap-3">
                <Link to="https://www.facebook.com/climaxgamestudios?mibextid=ZbWKwL">
                    <TiSocialFacebook className='hover:text-[#ff7e00] cursor-pointer' size={24} />
                </Link>
                <Link to="https://youtube.com/@climaxgamestudios2285?si=mVXb5S01sO82b6oK">
                    <CiYoutube className='hover:text-[#ff7e00] cursor-pointer' size={24} />
                </Link>
                <Link to="https://www.linkedin.com/company/climax-game-studios/">
                    <FaLinkedinIn className='hover:text-[#ff7e00] cursor-pointer' size={24} />
                </Link>
                <Link to="https://www.tiktok.com/@climaxgamestudios">
                    <FaTiktok className='hover:text-[#ff7e00] cursor-pointer' size={24} />
                </Link>
            </div>
        </div>
    )
}
