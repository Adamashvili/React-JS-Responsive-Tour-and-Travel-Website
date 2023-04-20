import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import travelImg from "../assets/service.jpg";
import Footer from "../components/Footer";

function Service () {
    return (
        <>
        <Navbar/>
         <Hero
         cName="hero-mid"
         heroImg={travelImg}
         title="Service"
         btnClass="hide"
         />
         <Footer/>
        </>
    )


}

export default Service;