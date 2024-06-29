import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/Banner";
import Keynote from "../components/Keynote";
import About from "../components/About";

const Home = () => {
    return (
    <>
        <Navbar/>
        <div className="text-center h-screen mt-[-74px]">
            <Banner/>
        </div>
        <div className="h-screen">
            <About/>
        </div>
        <div className="h-screen">
            <Keynote/>
        </div>
    </>
    )
}

export default Home
