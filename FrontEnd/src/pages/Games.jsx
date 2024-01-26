// Games.js

import React, { useState } from 'react';
import Heading from '../components/Heading/Heading';
import GameCard from '../components/GameCard/GameCard';
import img from '../images/gameImg.jpg';
import apple from '../images/store_ios_icon_normal.png';
import android from '../images/store_andriod_icon_normal.png';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './Games.css'; // Import the CSS file for styles

const allCards = [
    { text: 'SPROUT 1', desc: 'Casual | Mobile', img, apple },
    { text: 'SPROUT 2', desc: 'Casual | Mobile', img, apple, android },
    { text: 'SPROUT 3', desc: 'Casual | Mobile', img },
    { text: 'SPROUT 4', desc: 'Casual | Mobile', img, apple },
    { text: 'SPROUT 5', desc: 'Casual | Mobile', img, apple },
    { text: 'SPROUT 6', desc: 'Casual | Mobile', img },
    { text: 'SPROUT 7', desc: 'Casual | Mobile', img, apple, android },
    { text: 'SPROUT 8', desc: 'Casual | Mobile', img, apple },
];

const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
    }
    return result;
};

export default function Games() {
    const [showMore, setShowMore] = useState(false);

    const toggleCards = () => {
        setShowMore(!showMore);
    };

    const renderCardChunks = () => {
        const cardsToShow = showMore ? allCards : allCards.slice(0, 4);
        const cardChunks = chunkArray(cardsToShow, 4);

        return (
            <div className={`card-container ${showMore ? 'expanded' : ''}`}>
                {cardChunks.map((chunk, index) => (
                    <div key={index} className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:px-28 pt-2">
                        {chunk.map((card, i) => (
                            <GameCard key={i} {...card} />
                        ))}
                    </div>
                ))}
            </div>
        );
    };


    return (
        <div className="my-12">
            <Heading
                heading="OUR"
                span="GAMES"
                description="Doing what we do best! Our portfolio houses some of the most iconic & wildly popular titles like War Inc, Teeny Sheep & our recent Chart-Toppers such as Hospital Inc & Piercing Parlor. Allow us to show you our world in under 60 seconds!"
            />
            {renderCardChunks()}
            <div
                onClick={toggleCards}
                className={`toggle-button text-[#ff7e00] cursor-pointer hover:text-black`}
            >
                {showMore ? <p>Show less</p> : <p>Explore More</p>}
                {showMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
        </div>
    );
}
