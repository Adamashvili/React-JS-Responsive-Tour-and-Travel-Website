import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/germany.jpg";
import Trip2 from "../assets/switzerland.jpg";
import Trip3 from "../assets/norway.jpg";

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using google Maps.</p>
            <div className="tripcard">
                <TripData
                imgs = {Trip1}
                heading = "Trip in Germany"
                text = "No holiday in Germany is complete without a visit to the capital, Berlin. The iconic city offers a wide range of museums on German history: Learn more about the former East and West Berlin (e.g. in the DDR Museum), stroll along the River Spree on a sunny afternoon in spring or fall. "
                />

                <TripData
                imgs = {Trip2}
                heading = "Trip in Switzerland"
                text = "Tiny, multilingual Switzerland packs a lot into its landlocked borders: glittering lakes, sky-high peaks, postcard-perfect villages, world-class museums. Get a taste of it all with the Grand Tour, a 1,000-mile route that takes you to the medieval old city of Bern, towering Jungfraujoch, the iconic Matterhorn, and 42 other must-sees."
                />

                <TripData
                imgs = {Trip3}
                heading = "Trip in Norway"
                text = "With sparkling fjords lacing its coastline and soaring mountains dotting its interior, Norway could rightfully claim to be one of the world's most beautiful countries. A progressive society, thriving cultural scene, and free camping in most areas make Norway a great place to visit."
                />
            </div>
        </div>
        
    )
}

export default Trip;