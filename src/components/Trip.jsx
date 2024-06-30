import React from "react";
import { Link } from "react-router-dom";
import { IconArrowRight } from '@tabler/icons-react';

const Trip = () => {
    return (
        <>
        <div className="mb-10">
            <div className="tripBanner flex-row font-spaceGrotesk">
                <div className="font-bold mt-[25px]">
                    <h1 class="text-4xl sm:text-2xl md:text-4xl lg:text-5xl text-white text-center mb-5">
                        Join With Us <br />
                        On Mesmerizing Trip <br />
                    </h1>
                    <div className="mt-[20px] md:mt-[40px] flex items-center justify-center">
                        <Link className="bg-colorGreen flex w-fit py-2 px-5 items-center rounded-full gap-1" to={'/'}>Register<IconArrowRight className="w-5"/> </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Trip