import "./About.css"
import aboutimage from "../../Assets/aboutimage.jpg";
import about2  from  "../../Assets/about2.jpeg"
import { motion } from "framer-motion";
const About = () => {
    return ( 
        <div className="about" id="about">
            <div className="about-inner">
                <div className="about-left">
                    <motion.p 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.3 }}
                        className="about-title"
                    >
                        About Us
                    </motion.p>
                    <motion.h4
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.5 }} 
                        className="about-header"
                    >
                        Trusted UK Security Experts
                    </motion.h4>
                    <motion.p 
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.8 }}
                        className="about-content"
                    >
                        With office in Greater London. Grandix Security Personnel is a reputable security firm in the UK. Our team members have a variety of abilities, including expertise in close protection security and construction site security, among other specialties. Whether it is manned,everyone of our workers is an expert in their own field. We have years of experience protecting client assets and corporate assets, ensuring we employ our broad skill set in every situation. We cordially invite you to get to know the Grandix Security Personnel team, who are on call 24/7 to see to your specific security requirements.
                    </motion.p>
                </div>
                <div className="about-right">
                    <img src={aboutimage}></img>
                </div>
            </div>
            <div className="about-inner about-inner-2">
                <div className="about-right">
                    <img className="about-image-2" src={about2}></img>
                </div>
                <div className="about-left about-left-2">
                   <div className="stat-inner">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 0.3 }} 
                            className="stat"
                        >
                            <div className="number">
                                <p>01</p>
                            </div>
                            <h4>100%</h4>
                            <p className="stat-title">Satified Clients</p>
                        </motion.div>
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 0.5 }} 
                            className="stat"
                        >
                            <div className="number number-red">
                                <p>02</p>
                            </div>
                            <h4>&gt;100</h4>
                            <p className="stat-title">Clients</p>
                        </motion.div>
                        <motion.div 
                            initial={{ X: -25, opacity: 0 }}
                            whileInView={{ X: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 0.8 }}
                            className="stat"
                        >
                            <div className="number number-black">
                                <p>03</p>
                            </div>
                            <h4>&gt;100</h4>
                            <p className="stat-title">Clients</p>
                        </motion.div>
                   </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;