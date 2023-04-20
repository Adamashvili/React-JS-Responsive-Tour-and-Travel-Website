import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import travelImg from "../assets/contact.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

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
         <ContactForm/>
         <Footer/>
        </>
    )


}

export default Contact;