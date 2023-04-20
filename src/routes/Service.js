import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import travelImg from "../assets/service.jpg";

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
         
        </>
    )


}

export default Service;