import React from "react";
import { Link } from "react-router-dom";
import { IconArrowRight,IconCircleCheck } from '@tabler/icons-react';

const Pricelist = () => {
    return (
        <div className="m-5">
            <h1 className="text-center text-white font-plusJakarta font-bold text-3xl md:text-4xl mb-10">Pricelist</h1>
            <div className="flex flex-col md:flex-row gap-6">
                {["Participant","Oral & Poster Presentation","Oral & Poster Presentation + Publish"].map(role=>(
                <div className="p-5 bg-[#121212] w-full flex flex-col gap-10 justify-between rounded-xl border border-black transition hover:border hover:border-colorGreen">
                    <div className="text-white space-y-4">
                        <h3 className="text-2xl font-semibold font-spaceGrotesk">{role}</h3>
                        <p className="text-base md:text-lg font-plusJakarta">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a quam id neque rhoncus pulvinar at non leo</p>
                        <h1 className="text-4xl font-spaceGrotesk font-bold">Rp1.500.000</h1>
                    </div>
                    <div>
                        <span className="flex gap-2"><IconCircleCheck className="text-colorGreen"/><p className="text-white text-lg"> Free Snack</p></span>
                        <span className="flex gap-2"><IconCircleCheck className="text-colorGreen"/><p className="text-white text-lg"> Free Snack</p></span>
                    </div>
                    <button className="rounded-full px-5 py-3 text-lg bg-colorGreen hover:bg-transparent border border-colorGreen hover:border hover:border-colorGreen hover:text-colorGreen transition font-spaceGrotesk flex justify-between">
                    Choose Plan<IconArrowRight/></button>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Pricelist