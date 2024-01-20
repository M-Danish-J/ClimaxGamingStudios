import React, { useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { PiPhoneOutgoing } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css"

export default function Navbar() {

    const [HamBurger, setHamBurger] = useState(false)
    const handleToggle = () => {
        setHamBurger(!HamBurger);
    }

    return (
        <div className='px-[10vw] bg-neutral-800 relative'>
            <nav className='flex items-center justify-between'>
                <div className="md:hidden text-white text-2xl">
                    <GiHamburgerMenu onClick={handleToggle} />
                </div>
                <div className="text-white font-extrabold text-[40px] cursor-pointer">BiBrow</div>
                <div className="hidden md:block">
                    <ul className='flex gap-2'>
                        <NavItem icon={IoHomeOutline} text="Home" delay='0.2s' />
                        <NavItem icon={GrGroup} text="About Us" delay='0.4s' />
                        <NavItem icon={AiOutlineDeploymentUnit} text="Careers" delay='0.6s' />
                        <NavItem icon={PiPhoneOutgoing} text="Contact" delay='0.8s' />
                    </ul>
                </div>
            </nav>
            {HamBurger &&
                <div className="swing-in-top-fwd w-[90vw] h-52 bg-black rounded-md absolute top-20 left-5 bottom-0 text-white text-center pt-10 space-y-4 border-2 border-white">
                    <p className='text-base font-semibold'>Home</p>
                    <p className='text-base font-semibold'>About Us</p>
                    <p className='text-base font-semibold'>Career</p>
                    <p className='text-base font-semibold'>Contact</p>
                </div>
            }
        </div>
    )
}

const NavItem = ({ icon: Icon, text, delay }) => {
    const itemStyle = {
        animationDelay: delay,
    };
    return (
        <li style={itemStyle} className='text-lg font-semibold animate-fade-in flex items-center justify-center gap-2 text-black hover:text-white transition-colors bg-white hover:bg-slate-800 rounded-md px-3 py-2 cursor-pointer'>
            {Icon && <Icon className="" />}
            <span>{text}</span>
        </li>
    );
};
