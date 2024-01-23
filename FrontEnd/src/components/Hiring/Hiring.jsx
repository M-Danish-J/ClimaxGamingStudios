import React from 'react'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'

export default function Hiring() {
    return (
        <div className='mt-10'>
            <Heading heading="WE'RE" span="HIRING" description="Passionate? Have what it takes to join our world class team? We are eager to welcome you in our team." />
            <Button text="Apply Now" animateBg={true} />
        </div>
    )
}
