import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/Banner";
import Keynote from "../components/Keynote";
import Vanue from "../components/Vanue";
import Trip from "../components/Trip";
import ConnectWithUs from "../components/ConnectWs";

const Home = () => {
    return (
    <>
        <Navbar/>
        <div className="text-center h-screen mt-[-84px]">
            <Banner/>
        </div>
        <div className="h-screen">
            <Keynote/>
            <Vanue/>
            <Trip/>
            <ConnectWithUs/>
        </div>
        
    
    </>
    )
}

export default Home