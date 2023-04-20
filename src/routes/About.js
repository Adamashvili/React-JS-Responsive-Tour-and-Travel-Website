import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import travelImg from "../assets/travel.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";


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
         <AboutUs/>
         <Footer/>
        </>
        
    )


}

export default About;