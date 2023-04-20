import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import travelImg from "../assets/travel.jpg";


function About () {
    return (
        <>
        <Navbar/>
         <Hero
         cName="hero-mid"
         heroImg={travelImg}
         title="About"
         btnClass="hide"
         />
         
        </>
        
    )


}

export default About;