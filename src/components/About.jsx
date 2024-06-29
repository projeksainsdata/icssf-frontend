import React from "react";
const About = () => {
    return (
        <>
        {/* About Conferences*/}
        <div className="h-screen flex justify-center items-center font-spaceGrotesk m-10">
            <div className="flex">
            <div className="text-white flex flex-col gap-10 w-7/12">
                <div className="flex flex-col gap-3">
                    <h1 className="text-white text-4xl font-bold">About Conference</h1>
                    <p className="font-plusJakarta font-medium bg-gradient-to-b from-white to-[#181818] text-transparent bg-clip-text w-10/12">The development of science and technology produces global changes in various aspects of life. The prosperity of a nation does not only come from physical natural resources but also human resources in the form of intellectual capital, social capital, and credibility. The demand to improve the quality of education is a necessity in today's industry. </p>
                    <button className="bg-colorGreen px-5 py-2 font-bold rounded-full w-fit text-lg text-black hover:bg-[#181818] hover:text-colorGreen border border-colorGreen hover:border-colorGreen">Read Information</button>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-white text-2xl font-bold">Submission</h1>
                    <p className="font-plusJakarta text-gray-400 w-10/12">The development of science and technology produces global changes in various aspects of life. The prosperity of a nation does not only come from physical natural resources but also human resources in the form of intellectual capital, social capital, and credibility. </p>
                </div>
            </div>
            <div className="">
                <img src="https://placehold.co/525x525" width={525} height={525} className="rounded-lg"/>
            </div>
            </div>
        </div>
        </>
    )
}

export default About
