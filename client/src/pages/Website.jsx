import Header from "../components/Header"
import Hero from "../components/Hero"
import Companies from "../components/Companies";
import Residencies from "../components/Residencies";
import Value from "../components/Value";
import Contact from "../components/Contact";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

const Website = () => {
    return (
        <div className="App">
            <div>
                <div className="white-gradient" />
                <Hero />
            </div>
            <Companies />
            <Residencies />
            <Value />
            <Contact />
            <GetStarted />
        </div>
    )
}
export default Website