import React from 'react'
import SmallHeading from '../components/SmallHeading/SmallHeading'
import PerkCard from '../components/PerkCard/PerkCard'
import { FaHandHoldingHeart } from "react-icons/fa6";
import { PiShootingStar } from "react-icons/pi";
import { AiOutlineCrown } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { AiOutlineMacCommand } from "react-icons/ai";
import { AiOutlineWifi } from "react-icons/ai";
import { CiBitcoin } from "react-icons/ci";
import { FiGift } from "react-icons/fi";
import { FiPenTool } from "react-icons/fi";

export default function Perks() {
    return (
        <div className=' mt-16'>
            <SmallHeading text="OUR PERKS" />
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-x-10 xl:gap-x-16 py-10">
                <PerkCard icon={FaHandHoldingHeart} text="In Patient & Out Patient Medical Coverage" />
                <PerkCard icon={PiShootingStar} text="In Patient & Out Patient Medical Coverage" />
                <PerkCard icon={AiOutlineCrown} text="In Patient & Out Patient Medical Coverage" />
                <PerkCard icon={AiOutlineDribbble} text="In Patient & Out Patient Medical Coverage" />
                <PerkCard icon={AiOutlineMacCommand} text="In Patient & Out Patient Medical Coverage" />
                <PerkCard icon={AiOutlineWifi} text="In Patient & Out Patient Medical Coverage" />
                <PerkCard icon={CiBitcoin} text="In Patient & Out Patient Medical Coverage" />
                <PerkCard icon={FiGift} text="In Patient & Out Patient Medical Coverage" />
                <PerkCard icon={FiPenTool} text="In Patient & Out Patient Medical Coverage" />
            </div>
        </div>
    )
}
