import { useState } from "react";
import "./Navbar.css"
import { FaTimes } from "react-icons/fa";
import hambuger from "../../Assets/menu.svg"
const Navbar = () => {
    const [show, setShow] = useState(false)
    const handleSide = ()=>{
        setShow(!show);
    }
    return ( 
        <div className="navbar">
            <div className="navbar-left">
                <h2>Grandix<span>.</span></h2>
            </div>
            <div className="navbar-right">
                <nav>
                    <ul>
                        <a href="#home"><li>Home</li></a>
                        <a href="#about"><li>About Us</li></a>
                        <a href="#services"><li>Services</li></a>
                        <a href="#contact"><li>Contact</li></a>
                    </ul>
                </nav>
            </div>
            <div className="navbar-hamburger" onClick={handleSide}>
                <img src={hambuger}></img>
            </div>
            <div className={show ? `navbar-mobile navbar-mobile-open`: `navbar-mobile`}>
                <div className="nav-close">
                    <FaTimes onClick={handleSide}/>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
 
export default Navbar;