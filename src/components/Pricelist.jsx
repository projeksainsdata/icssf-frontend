import React from "react";
import { Link } from "react-router-dom";
import { IconArrowRight, IconCircleCheck } from '@tabler/icons-react';

const packages = [
    {
        role: "Participant",
        earlyBirdPrice: "USD 65 (Rp 1.000.000)",
        regularPrice: "USD 75 (Rp 1.200.000)",
        features: ["Free Snack", "Free Drink"],
    },
    {
        role: "Oral Presentation",
        earlyBirdPrice: "USD 85 (Rp 1.300.000)",
        regularPrice: "USD 95 (Rp 1.500.000)",
        features: ["Free Snack", "Conference Materials", "Networking Event"],
    },
    {
        role: "Oral Presentation or Poster Presentation",
        earlyBirdPrice: "JSAT SINTA 3 - USD 150 (Rp 2.250.000)",
        regularPrice: "JMANS Q2 - USD 550 (Rp 8.500.000)",
        features: ["Free Coffee Break & Lunch", "Free Certificate", "Journal Published", "Free One Day Trip Pahawang"],
        noEarlyBirdRegular: true
    }
];

const Pricelist = () => {
    return (
        <div className="m-5 mt-[100px]">
            <h1 className="text-center text-white font-plusJakarta font-bold text-3xl md:text-4xl mb-10">Pricelist</h1>
            <div className="flex flex-col md:flex-row gap-6">
                {packages.map((pkg, index) => (
                    <div key={index} className="p-5 bg-[#121212] w-full flex flex-col gap-10 justify-between rounded-xl border border-black transition hover:border hover:border-colorGreen">
                        <div className="text-white space-y-4">
                            <h3 className="text-2xl font-semibold font-spaceGrotesk">{pkg.role}</h3>
                            {!pkg.noEarlyBirdRegular && (
                                <>
                                    <p className="text-base md:text-lg font-plusJakarta">Early Bird</p>
                                    <h1 className="text-2xl font-spaceGrotesk font-bold">{pkg.earlyBirdPrice}</h1>
                                    <p className="text-base md:text-lg font-plusJakarta">Regular</p>
                                    <h1 className="text-2xl font-spaceGrotesk font-bold">{pkg.regularPrice}</h1>
                                </>
                            )}
                            {pkg.noEarlyBirdRegular && (
                                <>
                                    <h1 className="text-2xl font-spaceGrotesk font-bold">{pkg.earlyBirdPrice}</h1>
                                    <h1 className="text-2xl font-spaceGrotesk font-bold">{pkg.regularPrice}</h1>
                                </>
                            )}
                        </div>
                        <div>
                            {pkg.features.map((feature, idx) => (
                                <span key={idx} className="flex gap-2">
                                    <IconCircleCheck className="text-colorGreen" />
                                    <p className="text-white text-lg">{feature}</p>
                                </span>
                            ))}
                        </div>
                        <Link to="https://fsrecon.itera.ac.id/login" className="flex">
                        <button className="rounded-full px-5 py-3 text-lg bg-colorGreen hover:bg-transparent border border-colorGreen hover:border hover:border-colorGreen hover:text-colorGreen transition font-spaceGrotesk flex justify-between">
                            Choose Plan<IconArrowRight />
                        </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pricelist;
