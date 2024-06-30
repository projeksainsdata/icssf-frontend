import React from "react";
import { IconArrowRight,IconCircleCheck } from '@tabler/icons-react';
import scientist from '../assets/images/scientist.png'
const About = () => {
    return (
        <>
        {/* About Conferences*/}
        <div className="h-screen flex justify-center items-center font-spaceGrotesk m-5">
            <div className="flex flex-col md:flex-row gap-6 md:gap-0">
            <div className="text-white flex flex-col gap-10 md:w-7/12">
                <div className="flex flex-col gap-3">
                    <h1 className="text-white text-4xl font-bold">About Conference</h1>
                    <p className="font-plusJakarta font-medium bg-gradient-to-b from-white to-[#181818] text-transparent bg-clip-text md:w-10/12">The development of science and technology produces global changes in various aspects of life. The prosperity of a nation does not only come from physical natural resources but also human resources in the form of intellectual capital, social capital, and credibility. The demand to improve the quality of education is a necessity in today's industry. </p>
                    <button className="flex items-center gap-3 bg-colorGreen px-5 py-2 font-bold rounded-full w-fit text-lg text-black hover:bg-[#181818] hover:text-colorGreen border border-colorGreen hover:border-colorGreen">Read Information <IconArrowRight/></button>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-white text-2xl font-bold">Submission</h1>
                    <p className="font-plusJakarta text-gray-400 md:w-10/12">The development of science and technology produces global changes in various aspects of life. The prosperity of a nation does not only come from physical natural resources but also human resources in the form of intellectual capital, social capital, and credibility. </p>
                </div>
            </div>
            <div className="order-first md:order-last">
                <img src={scientist} className="rounded-lg w-full h-28 md:h-auto object-cover"/>
            </div>
            </div>
        </div>
        </>
    )
}

export default About
