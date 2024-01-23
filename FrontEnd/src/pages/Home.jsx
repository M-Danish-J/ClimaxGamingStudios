import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Main from '../components/Main/Main'

import Games from './Games'
import Hiring from '../components/Hiring/Hiring'
import MLABS from '../components/M-Labs/MLABS'
import Perks from './Perks'

export default function Home() {
    return (
        <div className='relative mb-[1000px]'>
            <div className="fixed left-0 right-0 top-0 z-10">
                <Navbar />
            </div>
            <Main />
            <Games />
            <Perks />
            <Hiring />
            <MLABS />
        </div>
    )
}
