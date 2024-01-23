import React from 'react'

export default function GameCard({ text, desc, img, apple, android }) {
    return (
        <div className='relative rounded-sm'>
            <div>
                <img src={img} />
            </div>
            <div className="absolute bottom-0 left-0 w-full text-white">
                <div className="flex items-center justify-between bg-black bg-opacity-30 px-1 lg:px-2 py-1 lg:py-2">
                    <div className="leading-tight">
                        <p className='font-semibold md:text-base'>{text}</p>
                        <p className='text-[10px] md:text-xs'>{desc}</p>
                    </div>
                    <div className="flex gap-1">
                        {apple && <img src={apple} className='w-16 lg:w-20 xl:w-28' />}
                        {android && <img src={android} className='w-16 lg:w-20 xl:w-28' />}
                    </div>
                </div>
            </div>
        </div>
    )
}
