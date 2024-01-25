import React from 'react'

export default function PerkCard({ icon: Icon, text }) {
    return (
        <div className='flex items-center justify-center flex-col px-2 md:px-6 lg:py-10 py-6 lg:px-10 xl:px-16 gap-4 hover:bg-[#ff7e00] text-slate-400 hover:text-white rounded-sm cursor-pointer'>
            <div className="text-3xl text-[#e6b380] hover:text-black md:text-4xl lg:text-5xl">
                <Icon />
            </div>
            <div className="">
                <p className=' text-[10px] md:text-lg lg:text-xl text-center leading-3 md:leading-tight lg:leading-none'>{text}</p>
            </div>
        </div>
    )
}
