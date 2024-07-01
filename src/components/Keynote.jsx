import React from "react";
import key1 from "./../assets/images/georg.jpg";
import key2 from "./../assets/images/shengban.png";
import key3 from "./../assets/images/raewyn.png";

const Keynote = () => {
    return (
        <>
            <div className="text-center font-plusJakarta mt-[120px]">
                <h1 className="text-white font-plusJakarta text-3xl font-bold">Keynote Speakers</h1>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-5 md:px-[100px] px-6">
                    <div className="bg-key p-5 rounded-xl flex flex-col items-center">
                        <img src={key1} className="w-40 h-40 object-cover rounded-lg mb-3" />
                        <div className="flex flex-col ml-3">
                            <p className="text-xl text-colorGreen font-bold text-center font-spaceGrotesk">Prof. Dr. -Ing. Georg Rademacher</p>
                            <p className="text-white text-base mt-2 text-center">University of Stuttgart, Germany</p>
                        </div>
                    </div>
                    <div className="bg-key p-5 rounded-xl flex flex-col items-center">
                        <img src={key2} className="w-40 h-40 object-cover rounded-lg mb-3" />
                        <div className="flex flex-col ml-3">
                            <p className="text-xl text-colorGreen font-bold text-center font-spaceGrotesk">Prof. Shengban Qian</p>
                            <p className="text-white text-base mt-2 text-center">Chinese Academy of Sciences, China</p>
                        </div>
                    </div>
                    <div className="bg-key p-5 rounded-xl flex flex-col items-center">
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

export default Keynote