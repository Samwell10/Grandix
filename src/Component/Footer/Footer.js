import './Footer.css';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import logo from "../../Assets/logonew.png"
const Footer = () => {
    const location = useLocation();
    const scrollToSection = (section) => {
        if (location.pathname === "/") {
          // Scroll to section on the home page
          document.getElementById(section).scrollIntoView({ behavior: "smooth" });
        } else {
          // Redirect to home page and scroll to section
          window.location.href = `/#${section}`;
        }// Close the mobile menu
      };
    return ( 
        <section className="footer">
            <div className="footer-body">
                <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.3 }}
                    className="footer-body-left"
                >
                    <div className="navbar-left">
                        <img src={logo}></img>
                    </div>
                    <p className="what-we-do">Explore our premier <span>security</span> solutions</p>
                    <p className="location">85 Great Portland Street, First Floor, London, W1W 7LT</p>
                    <p className="lettalk">Tel:  +44 (0)207 101 4819</p>
                    <p className="lettalk">Mobile: +44 755 3313 718</p>
                </motion.div>
                <div className="footer-body-right">
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.5 }}
                        className="company"
                    >
                        <h4 className="footer-head">Company</h4>
                        <a href='#about'><p className="footer-body-2"  onClick={() => scrollToSection("about")}>About Us</p></a>
                        <a href='#contact'><p className="footer-body-2" onClick={() => scrollToSection("contact")}>Contact Us</p></a>
                        <a href="" target="_blank"><p className="footer-body-2" onClick={() => scrollToSection("services")}>Services</p></a>
                    </motion.div>
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.8 }}
                        className="company"
                    >
                        <h4 className="footer-head">Socials</h4>
                        <a href='' target="_blank"><p className="footer-body-2">Facebook</p></a>
                        <a href='' target="_blank"><p className="footer-body-2">LinkedIn</p></a>
                        <a href='' target="_blank"><p className="footer-body-2">Instagram </p></a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
 
export default Footer;