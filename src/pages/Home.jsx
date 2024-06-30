import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/Banner";
import Keynote from "../components/Keynote";
import Timeline from "../components/Timeline";
import About from "../components/About";
import Topics from "../components/Topics";
import Pricelist from "../components/Pricelist";

const Home = () => {
    return (
    <>
        <Navbar/>
        <Banner/>
        <About/>
        <Timeline/>
        <Topics/>
        <Pricelist/>
    </>
    )
}

export default Home
