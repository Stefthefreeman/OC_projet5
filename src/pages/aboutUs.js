import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import banner_about from "../assets/banner/banner_about.png";
import CollapseData from "../datas/about-us.json";

function AboutUs() {
    return (
        <div>

            <Banner image={banner_about}/>
            <main className="about-main" >

            {CollapseData.map((collapse) => (                       // on liste les données de collapse depuis fichier json 
                <Collapse key={collapse.id}                         // Key pour que chaque collapse soit unique
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