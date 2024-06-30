import React from "react";
import { Link } from "react-router-dom";
import { IconArrowRight } from '@tabler/icons-react';
import venueImage from '../assets/images/vanue.png'
const Venue = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-20 justify-between text-left mt-[120px] md:px-[100px] mb-20 px-10">
                <div className="mt-0 md:mt-10 order-2 md:order-1">
                    <h1 className="text-4xl md:text-3xl font-spaceGrotesk text-center md:text-left text-colorGreen font-bold mb-[50px]">Venue</h1>
                    <div className="md:hidden mb-10">
                        <img src={venueImage} className="w-full h-auto rounded-lg border border-gray-200"/>
                    </div>
                    <h1 className="md:text-2xl font-spaceGrotesk text-white font-bold">Gedung F</h1>
                    <h1 className="md:text-xl font-spaceGrotesk text-white mb-0 md:mb-[100px]">
                        Jl. Terusan Ryacudu, Way Huwi, <br /> 
                        Kec. Jati Agung, Kabupaten <br /> 
                        Lampung Selatan, Lampung 35365
                    </h1>
                    <div className="mt-[50px] md:mt-[150px] flex">
                        <Link className="bg-colorGreen flex w-fit py-2 px-7 font-bold font-spaceGrotesk items-center rounded-full gap-1" to={'/'}>
                            Open Maps<IconArrowRight className="w-5 ml-1"/>
                        </Link>
                    </div>
                </div>
                <div className="md:mb-0 order-1 md:order-2 hidden md:block">
                    <img src={venueImage} className="w-full h-auto rounded-lg"/>
                </div>
            </div>
        </>
    )
}

export default Venue