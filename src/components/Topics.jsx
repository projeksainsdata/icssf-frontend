import React from "react";
import { Link } from "react-router-dom";
import { IconSchool,IconChevronDown  } from '@tabler/icons-react';
import scientist from '../assets/images/scientist.png'
const Topics = () => {
    return (
        <>
        {/* Conference Topics */}

        <div className="flex flex-col md:flex-row gap-10 m-5 my-10">
            <div className="text-white font-spaceGrotesk space-y-10">
                <div className="flex flex-col gap-3">
                    <h3>1st International Conference On Sustainability of Sciences for the Future (ICSSF)</h3>
                    <h1 className="text-3xl md:text-4xl font-bold text-colorGreen">Conference Topics</h1>
                </div>
                <div className="flex flex-col gap-3">
                {["Enivonmental Sciences","Pharmacy"].map(name=>
                    <div className="px-5 py-3 bg-[#121212] font-plusJakarta hover:bg-colorGreen hover:text-black cursor-pointer rounded-lg space-y-5">
                        <div className="flex justify-between">
                            <div className="flex items-center gap-3">
                                <IconSchool className="text-colorGreen"/>
                                <h3 className="text-lg font-semibold">{name}</h3>
                            </div>
                            <IconChevronDown/>
                        </div>
                    </div>
                )}
                <div className="px-5 py-3 bg-[#121212] font-plusJakarta hover:bg-colorGreen hover:text-black cursor-pointer rounded-lg space-y-5">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-3">
                            <IconSchool className="text-colorGreen hover:text-black"/>
                            <h3 className="text-lg font-semibold">Nature Sciences</h3>
                        </div>
                        <IconChevronDown/>
                    </div>
                    <div>
                    <ul className="list-disc mx-5 space-y-1">
                        <li>Global Environmental Change and Disaster Management</li>
                        <li>Natural Resources Science</li>
                        <li>Environmental Dynamics and Ecosystem</li>
                        <li>Environmental Management and Policy</li>
                        <li>Renewable energy</li>
                        <li>Ecology and Biodiversity</li>
                        <li>Environmental Pollution</li>
                        <li>Solid Waste Management</li>
                        <li>Global Pandemic</li>
                        <li>Carbon Footprint</li>
                        <li>Urban city heat impact</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="md:order-1 order-first">
                <img src={scientist} className="rounded-lg md:rounded-l-lg"/>
            </div>
        </div>
        </>
    )
}

export default Topics