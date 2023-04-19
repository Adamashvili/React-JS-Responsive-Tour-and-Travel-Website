import Navbar from "../components/Navbar"
import Hero from "../components/hero";
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
         
        </>
    )


}

export default Home;