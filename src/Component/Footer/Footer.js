import { Link } from 'react-router-dom';
import './Footer.css';
import { motion } from "framer-motion";
const Footer = () => {
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
                        <h2>Grandix<span>.</span></h2>
                    </div>
                    <p className="what-we-do">Explore our premier <span>security</span> solutions</p>
                    <p className="location">220 Oyemekun road, beside Michelin Tyres Services, Airways Akure.</p>
                    <p className="lettalk">Let’s Talk:  0805 588 7077</p>
                </motion.div>
                <div className="footer-body-right">
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.5 }}
                        className="company"
                    >
                        <h4 className="footer-head">Company</h4>
                        <a href='#about'><p className="footer-body-2">About Us</p></a>
                        <a href='#contact'><p className="footer-body-2">Contact Us</p></a>
                        <a href="" target="_blank"><p className="footer-body-2">Services</p></a>
                    </motion.div>
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.8 }}
                        className="company"
                    >
                        <h4 className="footer-head">Socials</h4>
                        <a href='https://www.facebook.com/thegeniuscentre?mibextid=ZbWKwL' target="_blank"><p className="footer-body-2">Facebook</p></a>
                        <a href='https://www.linkedin.com/company/crediometer/' target="_blank"><p className="footer-body-2">LinkedIn</p></a>
                        <a href='https://instagram.com/crediometer?igshid=YmMyMTA2M2Y=' target="_blank"><p className="footer-body-2">Instagram </p></a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
 
export default Footer;