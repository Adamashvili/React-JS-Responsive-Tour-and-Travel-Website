import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import travelImg from "../assets/contact.jpg";
import Footer from "../components/Footer";

function Contact () {
    return (
        <>
        <Navbar/>
         <Hero
         cName="hero-mid"
         heroImg={travelImg}
         title="Contact"
         btnClass="hide"
         />
         <Footer/>
        </>
    )


}

export default Contact;