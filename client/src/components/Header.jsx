import { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../utils/common";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <section className="h-wrapper">
            <div className="flexCenter innerWidth paddings h-container">
                <Link to="/">
                    <img src="./logo.png" alt="logo" width={100} />
                </Link>
                <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
                    <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                        <NavLink to="/properties">Properties</NavLink>
                        <a href="mailto:nabendu@gmail.com">Contact</a>
                        <button className="button">Login</button>
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