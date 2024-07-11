import React from "react";
import { Link } from "react-router-dom";
import { IconFileDescription } from '@tabler/icons-react';


const importantDates = [
    { date: "August 4, 2024", description: "Abstract Submission Deadline" },
    { date: "August 9, 2024", description: "Abstract Acceptance Notification" },
    { date: "August 31, 2024", description: "Full Paper Submission Deadline" },
    { date: "September 20, 2024", description: "Full Paper Final Submission Deadline " },
    { date: "September 26, 2024", description: "Seminar Event" }
];

const Timeline = () => {
    return (
        <>
        <div className="md:h-screen bg-gradient-to-b from-[#121212] to-[#39FF14] to-[900%] rounded-t-2xl md:rounded-t-[80px] font-spaceGrotesk flex flex-col justify-center items-center">
            <h1 className="text-colorGreen text-center text-3xl md:text-4xl font-bold py-10">Important Dates</h1>
            <ol className="md:flex relative border-s border-gray-200 dark:border-gray-700 md:border-none">
                {importantDates.map((item, index) => (
                    <li key={index} className="mb-10 ms-4 md:m-3">
                        <div className="md:hidden block absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <div className="px-5 py-8 bg-[#181818] rounded-lg text-white border border-[#525252] space-y-2 md:text-center shadow-inner">
                            <h1 className="text-xl font-semibold">{item.date}</h1>
                            <p>{item.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
        </>
    );
}

export default Timeline;