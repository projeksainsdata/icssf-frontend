import React from "react";
import ImageVanue from "./../assets/images/imageKeynot.png";

const Keynote = () => {
    return (
        <>
            <div className="text-center font-plusJakarta mt-[120px]">
                <h1 className="text-white font-plusJakarta text-3xl font-bold">Keynote Speakers</h1>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:px-[100px] px-10">
                    <div className="flex items-center mb-2 bg-key p-5 rounded-xl">
                        <img src={ImageVanue} className="w-[60px] rounded-full" />
                        <div className="flex flex-col ml-3">
                            <p className="text-xl text-colorGreen font-bold text-left font-spaceGrotesk">Prof. Hideyo Kawakita</p>
                            <p className="text-white text-sm mt-2 text-left">Faculty of Science, Department of Astrophysics and Meteorology, Kyoto Sangyo University</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-2 bg-key p-5 rounded-xl">
                        <img src={ImageVanue} className="w-[60px] rounded-full" />
                        <div className="flex flex-col ml-3">
                            <p className="text-xl text-colorGreen font-bold text-left font-spaceGrotesk">Prof. Hideyo Kawakita</p>
                            <p className="text-white text-sm mt-2 text-left">Faculty of Science, Department of Astrophysics and Meteorology, Kyoto Sangyo University</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-2 bg-key p-5 rounded-xl">
                        <img src={ImageVanue} className="w-[60px] rounded-full" />
                        <div className="flex flex-col ml-3">
                            <p className="text-xl text-colorGreen font-bold text-left font-spaceGrotesk">Prof. Hideyo Kawakita</p>
                            <p className="text-white text-sm mt-2 text-left">Faculty of Science, Department of Astrophysics and Meteorology, Kyoto Sangyo University</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Keynote