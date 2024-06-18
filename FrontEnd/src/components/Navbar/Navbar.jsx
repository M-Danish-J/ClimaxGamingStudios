import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css"
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [HamBurger, setHamBurger] = useState(false)

    const handleToggle = () => {
        setHamBurger(!HamBurger)
    }

    const [navbarBg, setNavbarBg] = useState(false);
    const [navbarText, setNavbarText] = useState('white');
    const [SmallNav, setSmallNav] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

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
    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollToSection = (event, sectionId) => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth' // Smooth scrolling behavior
            });
        }
    };

    return (
        <>
            <div className={`${isSmallScreen && 'bg-white'} flex items-center justify-between px-4 lg:px-10 py-4 ${navbarBg ? 'bg-white ! shadow' : 'bg-opacity-70'} `}>
                <div>
                    <Link to="/">
                        <p className='font-sans text-2xl sm:text-4xl font-bold '><span className='text-[#3572EF]'>Climax</span>Studios</p>
                    </Link>
                </div>
                <div className="lg:hidden text-3xl " onClick={handleToggle}>
                    {HamBurger ? <IoMdClose /> : <GiHamburgerMenu />}
                </div>
                <nav className='hidden lg:block'>
                    <ul className={`flex items-center justify-center leading-none gap-4 text-lg text-${navbarText} myshadow`}>
                        <li onClick={(event) => scrollToSection(event, 'games')} className='hover:text-[#3572EF] duration-300 cursor-pointer shadow-black'>Games</li>
                        <li onClick={(event) => scrollToSection(event, 'studio')} className='hover:text-[#3572EF] duration-300 cursor-pointer shadow-black'>Studios</li>
                        <li onClick={(event) => scrollToSection(event, 'perks')} className='hover:text-[#3572EF] duration-300 cursor-pointer shadow-black'>Perks</li>
                        {/* <li onClick={(event) => scrollToSection(event, 'labs')} className='hover:text-[#3572EF] duration-300 cursor-pointer shadow-black'>M−Labs</li> */}
                        {/* <li className='hover:text-[#3572EF] duration-300 cursor-pointer shadow-black'>Fresh Graduate Program</li> */}
                        <li onClick={(event) => scrollToSection(event, 'contact')} className='hover:text-[#3572EF] duration-300 cursor-pointer shadow-black'>Contact</li>
                        <Link to="/privacyPolicy">
                            <li className='hover:text-[#3572EF] duration-300 cursor-pointer shadow-black'>Privacy Policy</li>
                        </Link>
                        <Link to="/privacyPolicy">
                            <li className='hover:text-[#3572EF] duration-300 cursor-pointer shadow-black'>Terms of Service</li>
                        </Link>
                    </ul>
                </nav>
            </div>
            {HamBurger && <div className={`bg-white ${SmallNav ? '' : 'bg-opacity-70'} px-4 py-4 lg:hidden fade-in-top`}>
                <ul className=' text-xl text-black space-y-4 myshadow'>
                    <li onClick={(event) => scrollToSection(event, 'games')}><span className='text-sky-600'>G</span>ames</li>
                    <li onClick={(event) => scrollToSection(event, 'studio')}><span className='text-sky-600'>S</span>tudios</li>
                    <li onClick={(event) => scrollToSection(event, 'perks')} ><span className='text-sky-600'>P</span>erks</li>
                    <li onClick={(event) => scrollToSection(event, 'contact')}><span className='text-sky-600'>C</span>ontact</li>
                    <li>
                        <Link to="/privacyPolicy">
                            <li ><span className='text-sky-600'>P</span>rivacy Policy</li>
                        </Link>
                    </li>
                    <li>
                        <Link to="/privacyPolicy">
                            <li ><span className='text-sky-600'>T</span>erms of Service</li>
                        </Link>
                    </li>
                    {/* <li><span className='text-sky-600'>M</span>−Labs</li> */}
                    {/* <li><span className='text-sky-600'>F</span>resh Graduate Programs</li> */}
                    {/* <li><span className='text-sky-600'>P</span>roGolf</li> */}
                </ul>
            </div>}
        </>
    )
}
