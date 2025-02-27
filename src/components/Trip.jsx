import React from "react";
import { Link } from "react-router-dom";
import { IconArrowRight } from '@tabler/icons-react';

const Trip = () => {
    return (
        <>
        <div className="mb-10">
            <div className="tripBanner flex-row font-plusJakarta">
                <div className="font-bold mt-[25px]">
                    <h1 class="text-4xl sm:text-2xl md:text-4xl lg:text-5xl text-black text-center mb-5">
                        Join With Us <br />
                        On Mesmerizing Trip!<br />
                    </h1>
                    <div className="mt-[20px] md:mt-[40px] flex items-center justify-center">
                        <Link className="bg-colorGreen flex w-fit py-2 px-5 items-center rounded-full gap-1" to={'https://fsrecon.itera.ac.id/login'}>Register<IconArrowRight className="w-5"/> </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Trip