import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import banner_home from "../assets/banner/banner_home.png";

function Home() {
    return (
        <div>
n
            <Banner image={banner_home} texte= {<>Chez vous, <span>partout et ailleurs</span></>} />
            <Gallery /> 

        </div>
    );
}

export default Home;