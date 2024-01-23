import React from 'react'

export default function SmallHeading({ text }) {
    return (
        <div className=''>
            <p className='text-2xl font-medium tracking-wider'>{text}</p>
            <div className="h-px mt-3 bg-[#ff7e00] w-16"></div>
        </div>
    )
}
