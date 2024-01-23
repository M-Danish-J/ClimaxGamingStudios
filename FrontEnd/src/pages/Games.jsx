import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading/Heading'
import GameCard from '../components/GameCard/GameCard'
import img from '../images/gameImg.jpg'
import apple from '../images/store_ios_icon_normal.png'
import android from '../images/store_andriod_icon_normal.png'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


export default function Games() {

    const [Card, setCard] = useState(false)
    const toggleCards = () => {
        setCard(!Card)
    }

    return (
        <div className='my-12'>
            <Heading heading="OUR" span="GAMES" description="Doing what we do best! Our portfolio houses some of the most iconic & wildly popular titles like War Inc,Teeny Sheep & our recent Chart-Toppers such as Hospital Inc & Piercing Parlor. Allow us to show you our world in under 60 seconds!" />
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:px-28 pt-16">
                <GameCard text="SPROUT" desc="Casual | Mobile" img={img} apple={apple} />
                <GameCard text="SPROUT" desc="Casual | Mobile" img={img} apple={apple} android={android} />
                <GameCard text="SPROUT" desc="Casual | Mobile" img={img} />
                <GameCard text="SPROUT" desc="Casual | Mobile" img={img} apple={apple} />
            </div>
            {Card && <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:px-28 pt-2">
                <GameCard text="SPROUT" desc="Casual | Mobile" img={img} apple={apple} />
                <GameCard text="SPROUT" desc="Casual | Mobile" img={img} apple={apple} />
                <GameCard text="SPROUT" desc="Casual | Mobile" img={img} apple={apple} />
                <GameCard text="SPROUT" desc="Casual | Mobile" img={img} apple={apple} />
            </div>}
            <div onClick={toggleCards} className={`flex flex-col items-center justify-center mt-4 text-[#ff7e00] cursor-pointer hover:text-black ${Card ? 'flex-col-reverse' : ''}`}>
                {Card ? <p>Show less</p> : <p>Explore More</p>}
                {Card ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
        </div>
    )
}
