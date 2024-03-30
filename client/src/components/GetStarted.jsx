import "./GetStarted.css";

const GetStarted = () => {
    return (
        <div id="get-started" className="g-wrapper">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className="primaryText">Get started with Omyz</span>
                    <span className="secondaryText">
                        Subscribe and find super attractive deals from us.
                        <br />
                        Find your dream home soon
                    </span>
                    <button className="button" href>
                        <a href="mailto:nabendu@gmail.com">Get Started</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
