import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import Hero from "../components/hero";
import Trip from "../components/trip";
function Home () {
    return (
        <>
        <Navbar/>
         <Hero
         cName="hero"
         heroImg="https://www.careforthefamily.org.uk/wp-content/uploads/2022/04/journey-changer-1.jpg"
         title="Your Journey Your Story"
         text="Choose Your Favourite Destination"
         buttonText="travel Plan"
         url="/"
         btnClass="show"
         />
         <Destination/>
         <Trip/>
         <Footer/>
        </>
    )


}

export default Home;