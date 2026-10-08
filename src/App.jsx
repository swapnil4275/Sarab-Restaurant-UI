import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Category from "./components/Category";
import About from "./components/About";
import Menu from "./components/Menu";
import Offer from "./components/Offer";
import FoodShowcase from "./components/FoodShowcase";
import Journey from "./components/Journey";
import Chefs from "./components/Chefs";
import OpeningHours from "./components/OpeningHours";
import Feedback from "./components/Feedback";
import Reservation from "./components/Reservation";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

    return (
        <>
            <Navbar />

            <main>
                <Home />
                <Category />
                <About />
                <Menu />
                <Offer />
                <FoodShowcase />
                <Journey />
                <Chefs />
                <OpeningHours />
                <Feedback />
                <Reservation />
                <News />
                <Contact />
            </main>

            <Footer />
        </>
    );
}

export default App;