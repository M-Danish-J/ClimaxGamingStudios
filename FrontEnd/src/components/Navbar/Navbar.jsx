import React, { useEffect, useState } from 'react'
import Logo from "../../images/logo.svg"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css"

export default function Navbar() {

    const [HamBurger, setHamBurger] = useState(false)

    const handleToggle = () => {
        setHamBurger(!HamBurger)
    }

    const [navbarBg, setNavbarBg] = useState(false);
    const [navbarText, setNavbarText] = useState('white');
    const [SmallNav, setSmallNav] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 400) {
            setNavbarBg(true);
            setNavbarText('black');
            setSmallNav(true);
        } else {
            setNavbarBg(false);
            setNavbarText('white');
            setSmallNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className={`flex items-center justify-between px-4 lg:px-10 py-4 ${navbarBg ? 'bg-white' : 'bg-opacity-70'}`}>
                <div className='w-52 lg:w-auto'>
                    <img src={Logo} alt="LOGO" />
                </div>
                <div className="lg:hidden text-3xl " onClick={handleToggle}>
                    {HamBurger ? <IoMdClose /> : <GiHamburgerMenu />}
                </div>
                <nav className='hidden lg:block'>
                    <ul className={`flex items-center justify-center gap-4 text-xl text-${navbarText} myshadow`}>
                        <li className='hover:text-[#ee9222] cursor-pointer shadow-black'>Games</li>
                        <li className='hover:text-[#ee9222] cursor-pointer shadow-black'>Studios</li>
                        <li className='hover:text-[#ee9222] cursor-pointer shadow-black'>Careers</li>
                        <li className='hover:text-[#ee9222] cursor-pointer shadow-black'>M-Labs</li>
                        <li className='hover:text-[#ee9222] cursor-pointer shadow-black'>Fresh Graduate Program</li>
                        <li className='hover:text-[#ee9222] cursor-pointer shadow-black'>ProGolf</li>
                        <li className='hover:text-[#ee9222] cursor-pointer shadow-black'>Contact</li>
                    </ul>
                </nav>
            </div>
            {HamBurger && <div className={`bg-white ${SmallNav ? '' : 'bg-opacity-70'} px-4 py-4 lg:hidden fade-in-top`}>
                <ul className=' text-xl text-black space-y-4 myshadow'>
                    <li><span className='text-orange-600'>G</span>ames</li>
                    <li><span className='text-orange-600'>S</span>tudios</li>
                    <li><span className='text-orange-600'>C</span>areers</li>
                    <li><span className='text-orange-600'>M</span>-Labs</li>
                    <li><span className='text-orange-600'>F</span>resh Graduate Programs</li>
                    <li><span className='text-orange-600'>P</span>roGolf</li>
                    <li><span className='text-orange-600'>C</span>ontact</li>
                </ul>
            </div>}
        </>
    )
}
