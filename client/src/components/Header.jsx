import { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../utils/common";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <section className="h-wrapper">
            <div className="flexCenter innerWidth paddings h-container">
                <img src="./logo.png" alt="logo" width={100} />
                <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
                    <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                        <a href="">Residencies</a>
                        <a href="">Our Value</a>
                        <a href="">Contact Us</a>
                        <a href="">Get Started</a>
                        <button className="button">
                            <a href="mailto:nabendu@gmail.com">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>
                <div
                    className="menu-icon"
                    onClick={() => setMenuOpened((prev) => !prev)}
                >
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    )
}
export default Header