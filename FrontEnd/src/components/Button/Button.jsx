import React from 'react'

export default function Button({ text }) {
    return (
        <div>
            <button className='bg-[#ff7e00] hover:underline hover:bg-black px-8 py-1 text-white rounded-sm'>{text}</button>
        </div>
    )
}
