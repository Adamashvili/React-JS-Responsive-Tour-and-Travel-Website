import Mountain1 from "../assets/mountain1.jpg";
import Mountain2 from "../assets/mountain2.jpg";
import Mountain3 from "../assets/mountain3.jpg";
import Mountain4 from "../assets/mountain4.jpg";
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
            
            <DestinationData
            className="first-des"
            heading = "Mount Vesuvius"
            text = "Vesuvius, also called Mount Vesuvius or Italian Vesuvio, active volcano that rises above the Bay of Naples on the plain of Campania in southern Italy. Its western base rests almost upon the bay. The height of the cone in 2013 was 4,203 feet (1,281 metres), but it varies considerably after each major eruption. At about 1,968 feet (about 600 metres), a high semicircular ridge, called Mount Somma, begins, girding the cone on the north and rising to 3,714 feet (1,132 metres). Between Mount Somma and the cone is the Valle del Gigante (Giant’s Valley). At the summit of the cone is a large crater about 1,000 feet (about 305 metres) deep and 2,000 feet (about 610 metres) across; it was formed in the eruption of 1944. More than two million people live in the vicinity of Vesuvius and on its lower slopes. There are industrial towns along the coast of the Bay of Naples and small agricultural centres on the northern slopes."
            img1 = {Mountain1}
            img2 = {Mountain2}
            />

            <DestinationData
            className="first-des-reverse"
            heading = "Mount Etna, Italy"
            text = "Mount Etna is one of the world’s most active and iconic volcanoes, and an outstanding example of ongoing geological processes and volcanic landforms. The stratovolcano is characterized by almost continuous eruptive activity from its summit craters and fairly frequent lava flow eruptions from craters and fissures on its flanks. This exceptional volcanic activity has been documented by humans for at least 2,700 years – making it one of the world's longest documented records of historical volcanism. The diverse and accessible assemblage of volcanic features such as summit craters, cinder cones, lava flows, lava caves and the Valle de Bove depression have made Mount Etna a prime destination for research and education. Today Mount Etna is one of the best-studied and monitored volcanoes in the world, and continues to influence volcanology, geophysics and other earth science disciplines. Mount Etna’s notoriety, scientific importance, and cultural and educational value are of global significance."
            img1 = {Mountain3}
            img2 = {Mountain4}
            />
            
        </div>

    )
}

export default Destination