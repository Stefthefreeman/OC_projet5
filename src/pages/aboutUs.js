import React from "react";
import Banner from "../components/Banner";
import Accordion from "../components/Accordion";
import banner_about from "../assets/banner/banner_about_us.png";
import CollapseData from "../datas/about-us.json";

function AboutUs() {
    return (
        <div>

            <Banner image={banner_about}/>
            <main className="about-main" >

            {CollapseData.map((collapse) => (
                <Accordion key={collapse.id}
                           title={collapse.title}
                           content={collapse.content} />
            ))}
            </main>

        </div>
    );
}

export default AboutUs;



// Le composant About intègre plusieurs éléments réutilisables (Header, Banner et Footer) ainsi que le composant Collapse
// Map() est employée pour générer dynamiquement une liste de composants Collapse 
// Chacun collapse contient un titre et un contenu définis dans un fichier json