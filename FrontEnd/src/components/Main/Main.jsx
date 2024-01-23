import React, { useEffect, useState } from 'react'
import hero_splash from '../../images/hero_splash.svg'
import hero_splash_big from '../../images/hero-splash-2-big.svg'
import Carousal from '../Carousal/Carousal'



export default function Main() {
    // const isLarge = window.innerWidth <= 990;
    const [isLarge, setIsLarge] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLarge(window.innerWidth <= 990);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div>
            <div className="flex w-full">
                <div className="lg:w-1/2">
                    {isLarge ? <img src={hero_splash_big} alt="Main" /> : <img src={hero_splash} alt="Main" />}
                </div>
                <div className="w-[58%] hidden lg:block">
                    <Carousal />
                </div>
            </div>
        </div>
    )
}
