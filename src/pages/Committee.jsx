import React from "react";
import Navbar from "../components/navbar/Navbar";
import key1 from "./../assets/images/georg.jpg";
import key2 from "./../assets/images/shengban.png";
import key3 from "./../assets/images/raewyn.png";
const Committee = () => {
    return (
    <>
    <Navbar/>
        <div className="flex flex-col items-center justify-between mx-10">
        <div className='text-center text-white font-spaceGrotesk text-3xl font-bold h-[25vh]'>
            <h1><span className="text-colorGreen">ICSSF</span> Committee</h1>
        </div>

        <h1 className="pb-2 text-2xl text-white font-bold font-spaceGrotesk border-b-2 border-b-colorGreen">International Advisory Board</h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-5 md:px-[100px] px-6">
            <div className="bg-gradient-to-b from-[#121212] to-[#39FF14] to-[900%] p-5 rounded-xl flex flex-col items-center">
                <img src={key3} className="w-40 h-40 object-cover rounded-lg mb-3" />
                <div className="flex flex-col ml-3">
                    <p className="text-xl text-colorGreen font-bold text-center font-spaceGrotesk">Prof. Dr. Raewyn Poulsen</p>
                    <p className="text-white text-base mt-2 text-center">The University of Auckland, New Zealand</p>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#121212] to-[#39FF14] to-[900%] p-5 rounded-xl flex flex-col items-center">
                <img src={key3} className="w-40 h-40 object-cover rounded-lg mb-3" />
                <div className="flex flex-col ml-3">
                    <p className="text-xl text-colorGreen font-bold text-center font-spaceGrotesk">Prof. Dr. Raewyn Poulsen</p>
                    <p className="text-white text-base mt-2 text-center">The University of Auckland, New Zealand</p>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#121212] to-[#39FF14] to-[900%] p-5 rounded-xl flex flex-col items-center">
                <img src={key3} className="w-40 h-40 object-cover rounded-lg mb-3" />
                <div className="flex flex-col ml-3">
                    <p className="text-xl text-colorGreen font-bold text-center font-spaceGrotesk">Prof. Dr. Raewyn Poulsen</p>
                    <p className="text-white text-base mt-2 text-center">The University of Auckland, New Zealand</p>
                </div>
            </div>
        </div>


        <h1 className="my-5 pb-2 text-2xl text-white font-bold font-spaceGrotesk border-b-2 border-b-colorGreen">International Advisory Board</h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-5 md:px-[100px] px-6">
            <div className="bg-gradient-to-b from-[#121212] to-[#39FF14] to-[900%] p-5 rounded-xl flex flex-col items-center">
                <img src={key3} className="w-40 h-40 object-cover rounded-lg mb-3" />
                <div className="flex flex-col ml-3">
                    <p className="text-xl text-colorGreen font-bold text-center font-spaceGrotesk">Prof. Dr. Raewyn Poulsen</p>
                    <p className="text-white text-base mt-2 text-center">The University of Auckland, New Zealand</p>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#121212] to-[#39FF14] to-[900%] p-5 rounded-xl flex flex-col items-center">
                <img src={key3} className="w-40 h-40 object-cover rounded-lg mb-3" />
                <div className="flex flex-col ml-3">
                    <p className="text-xl text-colorGreen font-bold text-center font-spaceGrotesk">Prof. Dr. Raewyn Poulsen</p>
                    <p className="text-white text-base mt-2 text-center">The University of Auckland, New Zealand</p>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#121212] to-[#39FF14] to-[900%] p-5 rounded-xl flex flex-col items-center">
                <img src={key3} className="w-40 h-40 object-cover rounded-lg mb-3" />
                <div className="flex flex-col ml-3">
                    <p className="text-xl text-colorGreen font-bold text-center font-spaceGrotesk">Prof. Dr. Raewyn Poulsen</p>
                    <p className="text-white text-base mt-2 text-center">The University of Auckland, New Zealand</p>
                </div>
            </div>
        </div>
        </div>
    </>
    )
}

export default Committee
