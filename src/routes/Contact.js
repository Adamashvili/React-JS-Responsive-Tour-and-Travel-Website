import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import travelImg from "../assets/contact.jpg";

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
        </>
    )


}

export default Contact;