import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/Banner";

const Home = () => {
    return (
    <>
        <Navbar/>
        <div className="text-center h-screen mt-[-70px]">
            <Banner/>
        </div>
        <div className="mt-[800px]">
            <h1 className="mt-[200px] text-darkGreen text-5xl font-bold text-center">Home</h1>
        </div>
    </>
    )
}

export default Home