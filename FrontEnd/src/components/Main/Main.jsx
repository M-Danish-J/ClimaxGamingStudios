import React, { useEffect, useState } from 'react'
import Carousal from '../Carousal/Carousal'

import hero from '../../images/hero.png'
import hero2 from '../../images/heroBig.png'



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
                    {isLarge ? <img src={hero} alt="Main" /> : <img src={hero2} alt="Main" />}
                </div>
                <div className="w-[58%] hidden lg:block">
                    <Carousal />
                </div>
            </div>
        </div>
    )
}
