import React from "react";
import { Link } from "react-router-dom";
import { IconFileDescription } from '@tabler/icons-react';

const Banner = () => {
    return (
        <>
        <div className="bannerHome h-screen flex-row font-spaceGrotesk">
            <div className="font-bold mt-5">
            <h1 class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center">
                1st International Conference <br />
                On Sustainability of Sciences <br />
                for the Future ( ICSSF )
            </h1>
                <h1 className="text-colorGreen text-3xl pt-5">September 26-27th, 2024</h1>
                <h1 className="text-xl text-white italic">"Building Up The Next Generation of Scientists"</h1>
                <div className="mt-[50px] flex items-center justify-center">
                    <Link className="bg-colorGreen flex w-fit py-2 px-5 items-center rounded-full gap-1" to={'/'}><IconFileDescription className="w-5 mb-1"/> Call for Paper</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner