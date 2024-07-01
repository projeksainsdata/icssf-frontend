import React from "react";
import inv1 from "./../assets/images/hakim.png";
import inv2 from "./../assets/images/azrul.jpg";
import inv3 from "./../assets/images/werry.jpg";
import inv4 from "./../assets/images/anjar.jpg";
import inv5 from "./../assets/images/robi.jpg";

const Speaker = () => {
    return (
        <>
            <div className="text-center font-plusJakarta mt-[130px]">
                <h1 className="text-white font-plusJakarta text-3xl font-bold">Invited Speakers</h1>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:px-[100px] px-10">
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
                            <p className="text-xl text-colorGreen font-bold">Dr. Werry Febrianti</p>
                            <p className="text-white text-base mt-2">Department of Mathematics, Institut Teknologi Sumatera, Indonesia  </p>
                        </div>
                    </div>
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
                            <p className="text-xl text-colorGreen font-bold">Dr. Robiatul Muztaba</p>
                            <p className="text-white text-base mt-2">Department of Astronomy, Institut Teknologi Sumatera, Indonesia</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Speaker;
