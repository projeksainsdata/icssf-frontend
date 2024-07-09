import React from "react";
import Navbar from "../components/navbar/Navbar";
import FAQ from "../components/Faq";
import BannerCustom from "../components/BannerCustom";
import TopicsFaq from "../components/TopicsFaq";


const FaqPage = () => {
    return (
        <>
            <Navbar/>
            <BannerCustom name="FAQ"/>
            <TopicsFaq/>
            <h1 className="text-center md:text-3xl text-2xl text-white font-spaceGrotesk font-bold">Frequently Asked Questions</h1>
            <hr width='100' className="text-center m-auto mt-3 border border-colorGreen"/>
            <FAQ/>
        </>
    )
}

export default FaqPage