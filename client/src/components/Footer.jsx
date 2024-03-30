import "./Footer.css";

const Footer = () => {
    return (
        <div className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* left side */}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="" width={120} />
                    <span className="secondaryText">
                        Our vision is to have all people <br />
                        their dream home to live in.
                    </span>
                </div>

                <div className="flexColStart f-right">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText">95 Awadhpuri, BHEL, Bhopal, India</span>
                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
