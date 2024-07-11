import React from "react";
import inv1 from "./../assets/images/hakim1-01.png";
import inv2 from "./../assets/images/azrul1-01.png";
import inv3 from "./../assets/images/weri1-01.png";
import inv4 from "./../assets/images/anjar1-01.png";
import inv5 from "./../assets/images/robi1-01.png";
import inv6 from "./../assets/images/winati1-01.png";

const Speaker = () => {
    return (
        <>
            <div className="text-center font-plusJakarta mt-[130px]">
                <h1 className="text-white font-plusJakarta text-3xl font-bold">Invited Speakers</h1>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-2 md:px-[100px] px-10">
                    <div className="bg-black p-5 rounded-xl flex flex-col items-center">
                        <img src={inv1} className="w-40 h-40 object-cover rounded-lg mb-3" />
                        <div className="text-center">
                            <p className="text-xl text-colorGreen font-bold">Dr. Hakim L. Malasan</p>
                            <p className="text-white text-base mt-2">Department of Astronomy, Institut Teknologi Bandung, Indonesia  </p>
                        </div>
                    </div>
                    <div className="bg-black p-5 rounded-xl flex flex-col items-center">
                        <img src={inv2} className="w-40 h-40 object-cover rounded-lg mb-3" />
                        <div className="text-center">
                            <p className="text-xl text-colorGreen font-bold">Azrul S. K. Pohan, PhD</p>
                            <p className="text-white text-base mt-2">Department of Physics, Institut Teknologi Sumatera, Indonesia</p>
                        </div>
                    </div>
                    <div className="bg-black p-5 rounded-xl flex flex-col items-center">
                        <img src={inv3} className="w-40 h-40 object-cover rounded-lg mb-3" />
                        <div className="text-center">
                            <p className="text-xl text-colorGreen font-bold">Dr. Werry Febrianti, S.Pd., M.Si.</p>
                            <p className="text-white text-base mt-2">Department of Mathematics, Institut Teknologi Sumatera, Indonesia  </p>
                        </div>
                    </div>
                    </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-2 md:px-[100px] px-10">
                    <div className="bg-black p-5 rounded-xl flex flex-col items-center">
                        <img src={inv4} className="w-40 h-40 object-cover rounded-lg mb-3" />
                        <div className="text-center">
                            <p className="text-xl text-colorGreen font-bold">Dr. apt. Anjar Hermadi Saputro, M.Pharm.Sci</p>
                            <p className="text-white text-base mt-2">Department of Pharmacy, Institut Teknologi Sumatera, Indonesia  </p>
                        </div>
                    </div>
                    <div className="bg-black p-5 rounded-xl flex flex-col items-center">
                        <img src={inv5} className="w-40 h-40 object-cover rounded-lg mb-3" />
                        <div className="text-center">
                            <p className="text-xl text-colorGreen font-bold">Dr. Robiatul Muztaba, S.Si., M.Si.</p>
                            <p className="text-white text-base mt-2">Department of Atmospheric and Planetary Sciences, Institut Teknologi Sumatera, Indonesia</p>
                        </div>
                    </div>
                    <div className="bg-black p-5 rounded-xl flex flex-col items-center">
                        <img src={inv6} className="w-40 h-40 object-cover rounded-lg mb-3" />
                        <div className="text-center">
                            <p className="text-xl text-colorGreen font-bold">Dr. Winati Nurhayu, S.Si.</p>
                            <p className="text-white text-base mt-2">Department of Biology, Institut Teknologi Sumatera, Indonesia</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Speaker;
