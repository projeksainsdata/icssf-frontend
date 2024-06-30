import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/Banner";
import Keynote from "../components/Keynote";
import Vanue from "../components/Vanue";
import Trip from "../components/Trip";
import ConnectWithUs from "../components/ConnectWs";
import CountdownTimer from "../components/Countdown";
import Speaker from "../components/Speaker";

const Home = () => {
    return (
    <>
        <Navbar/>
        <div className="text-center h-screen mt-[-84px]">
            <Banner/>
        </div>
        <div className="h-screen">
            <Keynote/>
            <Speaker/>
            <Vanue/>
            <Trip/>
            <div className="flex items-center justify-center mt-[100px]">
                <div className="bg-count md:py-4 md:px-5 rounded">
                    <CountdownTimer />
                </div>
            </div>
            <ConnectWithUs/>
        </div>
        
    
    </>
    )
}

export default Home