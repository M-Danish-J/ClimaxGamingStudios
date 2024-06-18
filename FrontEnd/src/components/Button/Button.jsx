import React from 'react'
import './Button.css'

export default function Button({ text, animateBg }) {
    return (
        <div>
            <button className={`bg-[#3572EF] hover:underline hover:bg-black px-8 py-1 text-white rounded-sm ${animateBg ? 'colorAnimate' : ''}`} onMouseOver={(e) => e.target.classList.remove('colorAnimate')} onMouseLeave={(e) => e.target.classList.add('colorAnimate')}>{text}</button>
        </div>
    )
}
