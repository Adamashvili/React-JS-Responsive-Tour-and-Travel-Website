import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import travelImg from "../assets/travel.jpg";
import Footer from "../components/Footer";


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
         <Footer/>
        </>
        
    )


}

export default About;