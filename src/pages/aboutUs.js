import React from "react";
import Banner from "../components/Banner";
import Accordion from "../components/Accordion";
import banner_about from "../assets/banner/banner_about_us.png";
import aboutUs from "../datas/about-us.json";

function AboutUs() {
    return (
        <div>

            <Banner image={banner_about}/>
            <main className="accordion-main" >

            {aboutUs.map((accordion) => (
                <Accordion key={accordion.id}
                           title={accordion.title}
                           content={accordion.content} />
            ))}
            </main>

        </div>
    );
}

export default AboutUs;



// Le composant About intègre plusieurs éléments réutilisables (Header, Banner et Footer) ainsi que le composant Collapse
// Map() est employée pour générer dynamiquement une liste de composants Collapse 
// Chacun collapse contient un titre et un contenu définis dans un fichier json