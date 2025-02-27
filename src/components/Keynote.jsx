import React from "react";
import key1 from "./../assets/images/jongin1-01.png";
import key2 from "./../assets/images/mohd-01.png";
import key3 from "./../assets/images/chuda1-01.png";

const Keynote = () => {
    return (
        <>
            <div className="text-center font-plusJakarta mt-[120px]">
                <h1 className="text-white font-plusJakarta text-3xl font-bold">Keynote Speakers</h1>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-5 md:px-[100px] px-6">
                    <div className="bg-gradient-to-b from-[#121212] to-[#39FF14] to-[900%] p-5 rounded-xl flex flex-col items-center">
                        <img src={key1} className="w-40 h-40 object-cover rounded-lg mb-3" />
                        <div className="flex flex-col ml-3">
                            <p className="text-xl text-colorGreen font-bold text-center font-spaceGrotesk">Prof. Jongin Hong, Ph.D.</p>
                            <p className="text-white text-base mt-2 text-center">Chung Ang University, South Korea</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-b from-[#121212] to-[#39FF14] to-[900%] p-5 rounded-xl flex flex-col items-center">
                        <img src={key2} className="w-40 h-40 object-cover rounded-lg mb-3" />
                        <div className="flex flex-col ml-3">
                            <p className="text-xl text-colorGreen font-bold text-center font-spaceGrotesk">Prof. Ir. Dr. Mohd Fairusham Bin Ghazali</p>
                            <p className="text-white text-base mt-2 text-center">Universiti Malaysia Pahang Al-Sultan Abdullah, Malaysia</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-b from-[#121212] to-[#39FF14] to-[900%] p-5 rounded-xl flex flex-col items-center">
                        <img src={key3} className="w-40 h-40 object-cover rounded-lg mb-3" />
                        <div className="flex flex-col ml-3">
                            <p className="text-xl text-colorGreen font-bold text-center font-spaceGrotesk">Assoc Prof Dr.Chuda Chittasupho</p>
                            <p className="text-white text-base mt-2 text-center">Chiang Mai University,Thailand</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Keynote