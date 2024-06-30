import React from "react";
import { Link } from "react-router-dom";
import { IconFileDescription } from '@tabler/icons-react';

const Timeline = () => {
    return (
        <>
        <div className="md:h-screen bg-gradient-to-b from-[#121212] to-[#39FF14] to-[900%] rounded-t-2xl md:rounded-t-[80px] font-spaceGrotesk flex flex-col justify-center items-center">
            <h1 className="text-colorGreen text-center text-3xl md:text-4xl font-bold py-10">Important Dates</h1>
{/*            <div className="flex flex-col md:flex-row gap-6 mx-10 justify-center items-center">
            {[...new Array(5)].map(x=>
                <div className="px-5 py-10 bg-[#181818] rounded text-white border border-[#525252] space-y-1 text-center shadow-inner">
                    <h1 className="text-2xl font-semibold">Agustus 4, 2024</h1>
                    <p>Abstract Submission Deadline</p>
                </div>
            )}
            </div>*/}
            <ol class="md:flex relative border-s border-gray-200 dark:border-gray-700 md:border-none">
            {[...new Array(5)].map(x=>
                <li class="mb-10 ms-4 md:m-3">
                    <div class="md:hidden block absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="px-5 py-8 bg-[#181818] rounded-lg text-white border border-[#525252] space-y-2 md:text-center shadow-inner">
                        <h1 className="text-2xl font-semibold">September 4, 2024</h1>
                        <p>Full Paper Final Submission Deadline</p>
                    </div>
                </li>
            )}
            </ol>
        </div>
        </>
    )
}

export default Timeline