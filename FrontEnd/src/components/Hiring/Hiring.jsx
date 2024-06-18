import React from 'react'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import { Link } from 'react-router-dom'

export default function Hiring() {
    return (
        <div className='my-10'>
            <Heading heading="WE'RE" span="HIRING" description="Passionate? Have what it takes to join our world class team? We are eager to welcome you in our team." />
            <Link to="https://www.linkedin.com/company/climax-game-studios/" target='_blank'>
                <Button text="Apply Now" animateBg={true} />
            </Link>
        </div>
    )
}
