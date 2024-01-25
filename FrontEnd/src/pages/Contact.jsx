import React from 'react'
import Heading from '../components/Heading/Heading'
import SmallHeading from '../components/SmallHeading/SmallHeading'
import { TbMailFilled } from "react-icons/tb";
import { ImLocation } from "react-icons/im";
import MyForm from '../components/MyForm/MyForm';

export default function Contact() {
    return (
        <div className='mt-52 md:mt-0'>
            <Heading heading="GET IN" span="TOUCH" description="We would love to hear from you!" />
            <div className="flex flex-col mt-20 md:mt-0 md:flex-row md:w-full items-baseline gap-4">
                <div className="md:w-1/2">
                    <SmallHeading text='LEAVE US A MESSAGE' />
                    <div className='bg-gray-100 px-4 py-4 shadow-xl mt-4'>
                        <MyForm />
                    </div>
                </div>
                <div className="mt-16 md:w-1/2">
                    <SmallHeading text='OUR DETAILS' />
                    <div className="space-y-5 mt-8 text-md">
                        <div className="flex items-center gap-2">
                            <div className="bg-gray-100 px-2 py-2 rounded-md">
                                <TbMailFilled size={18} color='#ff7e00' />
                            </div>
                            <p>Email:
                                <span className='text-[#ff7e00]'>hello@mindstormstudios.com</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-gray-100 px-2 py-2 rounded-md">
                                <ImLocation size={18} color='#ff7e00' />
                            </div>
                            <p>Head Office:
                                <span className='text-[#ff7e00]'>  8 The Green, Suite 12483, Dover, DE 19901</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-gray-100 px-2 py-2 rounded-md">
                                <TbMailFilled size={18} color='#ff7e00' />
                            </div>
                            <p>Studio Address:
                                <span className='text-[#ff7e00]'>Office No. 806, 8th Floor, Haly Tower, DHA Phase 2, Lahore, 54500</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108853.92488695767!2d74.32260302382215!3d31.50533692348734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907119f7597af%3A0x9039432c58df6514!2sMindstorm%20Studios!5e0!3m2!1sen!2s!4v1706162595939!5m2!1sen!2s" height="400" width="100%" style={{ border: "1px solid yellow" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
