import React from 'react'
import SmallHeading from '../components/SmallHeading/SmallHeading'
import PerkCard from '../components/PerkCard/PerkCard'
import { FaHandHoldingHeart } from "react-icons/fa6";

export default function Perks() {
    return (
        <div className='mx-[5vw] lg:mx-[13vw]'>
            <SmallHeading text="OUR PERKS" />
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-x-10 lg:gap-x-16 py-10">
                <PerkCard icon={FaHandHoldingHeart} text="In Patient & Out Patient Medical Coverage" />
                <PerkCard icon={FaHandHoldingHeart} text="In Patient & Out Patient Medical Coverage" />
                <PerkCard icon={FaHandHoldingHeart} text="In Patient & Out Patient Medical Coverage" />
                <PerkCard icon={FaHandHoldingHeart} text="In Patient & Out Patient Medical Coverage" />
                <PerkCard icon={FaHandHoldingHeart} text="In Patient & Out Patient Medical Coverage" />
                <PerkCard icon={FaHandHoldingHeart} text="In Patient & Out Patient Medical Coverage" />
                <PerkCard icon={FaHandHoldingHeart} text="In Patient & Out Patient Medical Coverage" />
                <PerkCard icon={FaHandHoldingHeart} text="In Patient & Out Patient Medical Coverage" />
                <PerkCard icon={FaHandHoldingHeart} text="In Patient & Out Patient Medical Coverage" />
            </div>
        </div>
    )
}
