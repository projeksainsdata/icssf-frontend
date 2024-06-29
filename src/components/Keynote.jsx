import React from "react";

const Keynote = () => {
    return (
        <>
            <div className="text-center font-plusJakarta mt-10">
                <h1 className="text-white font-plusJakarta font-bold">Keynote Speakers</h1>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:px-[100px] px-10">
                    <div className="flex items-center mb-2 bg-key p-5 rounded-xl">
                        <img src='https://placehold.co/700x700' className="w-[60px] rounded-full" />
                        <div className="flex flex-col ml-3">
                            <p className="text-sm text-colorGreen font-bold text-left">Prof. Masgalih.net</p>
                            <p className="text-gray-500 text-[10px] mt-2 text-left">Faculty of Science, Department of Astrophysics and Meteorology, Kyoto Sangyo University</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-2 bg-key p-5 rounded-xl">
                        <img src='https://placehold.co/700x700' className="w-[60px] rounded-full" />
                        <div className="flex flex-col ml-3">
                            <p className="text-sm text-colorGreen font-bold text-left">Prof. Masgalih.net</p>
                            <p className="text-gray-500 text-[10px] mt-2 text-left">Faculty of Science, Department of Astrophysics and Meteorology, Kyoto Sangyo University</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-2 bg-key p-5 rounded-xl">
                        <img src='https://placehold.co/700x700' className="w-[60px] rounded-full" />
                        <div className="flex flex-col ml-3">
                            <p className="text-sm text-colorGreen font-bold text-left">Prof. Masgalih.net</p>
                            <p className="text-gray-500 text-[10px] mt-2 text-left">Faculty of Science, Department of Astrophysics and Meteorology, Kyoto Sangyo University</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Keynote