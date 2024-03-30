import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
import "./Contact.css";

const Contact = () => {
    return (
        <div id="contact-us" className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                <div className="flexColStart c-left">
                    <span className="orangeText">Contact Us</span>
                    <span className="primaryText">Easy to contact us</span>
                    <span className="secondaryText">
                        We always ready to help by providing the best services to you. We
                        beleive a good place to live, can make your life better{" "}
                    </span>
                    <div className="flexColStart contactModes">
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call now</div>
                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Chat</span>
                                        <span className="secondaryText">021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat now</div>
                            </div>
                        </div>

                        {/* second row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Video Call</span>
                                        <span className="secondaryText">021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Call now</div>
                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Message</span>
                                        <span className="secondaryText">021 123 145 14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message now</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flexEnd c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact