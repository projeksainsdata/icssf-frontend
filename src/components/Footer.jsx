import React from "react";
import { Link } from "react-router-dom";
import { IconArrowRight } from '@tabler/icons-react';
import logoFooter from '../assets/images/footer.png'

const Footer = () => {
    return (
        <>
        <div className="flex items-center justify-between mx-10 py-5 mt-[8em] border-t border-white border-opacity-10">
            <img src={logoFooter} width={200}/>
            <p className="font-plusJakarta text-white text-xs md:text-sm">Copyright ICSSF 2024</p>
            {/*<div className="absolute bg-gradient-to-b from-[#121212] to-[#39FF14] bg-opacity-0 w-[60em] h-72 rounded-full left-0 right-0 ml-auto mr-auto -bottom-[20px] blur-3xl"></div>*/}
        </div>
        </>
    )
}

export default Footer