import { useState } from "react";
import "./Navbar.css"
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import hambuger from "../../Assets/menu.svg"
import logo from "../../Assets/logonew.png"
const Navbar = () => {
    const [show, setShow] = useState(false)
    const location = useLocation();
    const handleSide = ()=>{
        setShow(!show);
    }
    const scrollToSection = (section) => {
        if (location.pathname === "/") {
          // Scroll to section on the home page
          document.getElementById(section).scrollIntoView({ behavior: "smooth" });
        } else {
          // Redirect to home page and scroll to section
          window.location.href = `/#${section}`;
        }
        setShow(false); // Close the mobile menu
      };
    return ( 
        <div className="navbar">
            <div className="navbar-left">
                <img src={logo}></img>
                {/* <h2>Grandix<span>.</span></h2> */}
            </div>
            <div className="navbar-right">
                <nav>
                    <ul>
                    <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("about")}>About Us</li>
            <li onClick={() => scrollToSection("services")}>Services</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
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
                    <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("about")}>About Us</li>
            <li onClick={() => scrollToSection("services")}>Services</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
 
export default Navbar;