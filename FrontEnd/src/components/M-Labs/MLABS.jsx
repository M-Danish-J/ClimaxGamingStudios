import React from 'react'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import mlabs from '../../images/m-labs-logo.svg'

export default function MLABS() {
    return (
        <div className=' my-24 relative'>
            <Heading heading="M" span="LABS" description="M-LABS has a purpose built space to house and groom the best game dev talent in Pakistan via Incubation, Game Jams, Interships and a nationwide fellowship program." width={true} />
            <Button text="Explore" />
            <div className="absolute md:right-0 lg:right-10 xl:right-28 -bottom-40 md:-bottom-6 xl:-bottom-20">
                <img className='w-64' src={mlabs} />
            </div>
        </div>
    )
}
