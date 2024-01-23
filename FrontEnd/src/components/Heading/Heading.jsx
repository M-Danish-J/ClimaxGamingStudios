import React from 'react'
import "./Heading.css"

export default function Heading({ heading, span, description, width }) {
    return (
        <div className='gap-6'>
            <div className="text-4xl md:flex items-center">
                <h1 className='headingAnimate'>{heading}
                    <span className='text-[#ff7e00] pl-4 font-semibold tracking-[5px]'>{span}</span>
                </h1>
                <div className="animateWidth md:ml-6 lg:mx-10 h-[3px] bg-[#ff7e00]"></div>
            </div>
            <p className={`text-base py-4 lg:pr-20 ${width ? 'w-2/3' : ''}`}>
                {description}
            </p>
        </div>
    )
}
