import "./Hero.css";
import CountUp from "react-countup";
import SearchBar from "./SearchBar";

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <h1>Discover <br /> Most Awesome <br /> Properties</h1>
                    </div>
                    <div className="flexColStart secondaryText flexhero-des">
                        <span>Find a variety of properties that suit you needs</span>
                        <span>Forget all difficulties in finding a residence you love</span>
                    </div>
                    <SearchBar />
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
                            </span>
                            <span className="secondaryText">Premium Product</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
                            </span>
                            <span className="secondaryText">Happy Customer</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={22} end={28} duration={4} /> <span>+</span>
                            </span>
                            <span className="secondaryText">Awards Winning</span>
                        </div>
                    </div>
                </div>
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="houses" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero