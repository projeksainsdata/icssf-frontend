import React, { useState } from "react";
import { IconSchool, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import scientist from '../assets/images/ideas.png';

const TopicsFaq = () => {
    const [openTopic, setOpenTopic] = useState();

    const toggleTopic = (name) => {
        setOpenTopic(openTopic === name ? null : name);
    };

    const topics = [
        {
            name: "Nature Sciences",
            details: [
                "Mathematics",
                "Physics",
                "Biology",
                "Chemistry",
                "Astronomy",
                "Meteorology",
                "Atmospheric and Planetary Science",
                "Earth Science"
            ]
        },
        {
            name: "Enivonmental Sciences",
            details: [
                "Global Environmental Change and Disaster Management",
                "Natural Resources Science",
                "Environmental Dynamics and Ecosystem",
                "Environmental Management and Policy",
                "Renewable energy",
                "Ecology and Biodiversity",
                "Enviromental Pollution",
                "Ocean and coastal",
                "Solid Waste Management",
                "Global Pandemic",
                "Carbon Footprint",
                "Urban city heat impac"                
            ]
        },
        {
            name: "Pharmacy",
            details: [
                "Pharmaceutical Sciences",
                "Global Health and Pharmacy",
                "Pharmacy Automation and Technology",
                "Physical Pharmacy and Cosmetic",
                "Natural Products Chemistry and Pharmacognosy",
                "Medicinal and Pharmaceutical Chemistry",
                "Precision Medicine",
                "Pharmacy Policy and Regulatory",
                "Clinical and Industrial Drug"
                
            ]
        }
    ];

    return (
        <>
            {/* Conference Topics */}
            <div class="flex justify-center items-center flex-col gap-10 m-5 my-[150px]">
                <div class="text-white font-spaceGrotesk space-y-10 w-full max-w-[50em]">
                    <div class="flex flex-col gap-3">
                        <h1 class="text-3xl md:text-4xl font-bold text-white text-center">Conference Topics</h1>
                        <hr class="text-center m-auto border md:-mt-[10px] mb-[20px] border-colorGreen" width="100"/>
                    </div>
                    <div class="flex w-full flex-col gap-3">
                        {topics.map((topic, index) => (
                            <div key={index} class="px-5 py-4 bg-[#121212] font-plusJakarta hover:bg-colorGreen hover:text-black cursor-pointer rounded-lg space-y-5">
                                <div class="flex justify-between" onClick={() => toggleTopic(index)}>
                                    <div class="flex items-center gap-3">
                                        <IconSchool class="text-white"/>
                                        <h3 class="text-lg font-semibold">{topic.name}</h3>
                                    </div>
                                    {openTopic === index ? <IconChevronUp /> : <IconChevronDown />}
                                </div>
                                {openTopic === index && (
                                    <div>
                                        <ul class="list-disc mx-5 space-y-1">
                                            {topic.details.map((detail, i) => (
                                                <li key={i}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopicsFaq;
