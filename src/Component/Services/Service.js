import "./Service.css";
import cooperate from "../../Assets/cooperate.jpeg"
import retail from "../../Assets/retail.jpg"
import construction from "../../Assets/construction.jpeg"
import residential from "../../Assets/aboutimage.jpg"
import vacant from "../../Assets/vacant.jpeg"
import key from "../../Assets/key.jpg"
import event from "../../Assets/event.jpg"
import door from "../../Assets/door.jpg"
import security from "../../Assets/security.jpg"
import { serviceData } from "../data";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
const Service = () => {
    return ( 
        <div className="service about" id="services">
             <motion.p 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: 0.3 }}
                className="about-title"
            >
                Services
            </motion.p>
            <motion.h4
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: 0.5 }} 
                className="about-header"
            >
                Grandix: Guaranteed Safety & Protection
            </motion.h4>
            <motion.p 
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: 0.8 }}
                className="about-content"
            >
                Our clients are always our top priority. Because we want you to choose the solution that best meets your needs, we provide a wide range of services to assist you in making an informed choice about the security of your company. To satisfy your demands, we offer a variety of security services
            </motion.p>
            <div className="services-new">
                <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: 0.3 }}
                className="service-single"
                >
                    <div className="service-content">
                        <h4>Corporate Security</h4>
                        <p>As a result of terrorist threats, corporate crimes, and internet-based crimes, there has been an increase in the necessity for corporate safety in recent years. Therefore, the importance of having skilled and qualified security personnel cannot be overstated.</p>
                    </div>
                    <Link to="/services">
                    <button className="learn-more">
                        Learn More <MdArrowOutward/>
                    </button>
                    </Link>
                </motion.div>
                <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: 0.6 }}
                className="service-single service-single-2"
                >
                    <div className="service-content">
                        <h4>Event Security</h4>
                        <p>Our package, which also includes advice on crowd control, Danger prevention,safe, secure venue and stage design at the planning stage. </p>
                    </div>
                    <Link to="/services">
                    <button className="learn-more">
                        Learn More <MdArrowOutward/>
                    </button>
                    </Link>
                </motion.div>
                <motion.div
                 initial={{ x: -10, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ type: "spring", duration: 1, delay: 0.9 }}
                 className="service-single service-single-3"
                >
                    <div className="service-content">
                        <h4>Security Consultancy and Risk Management</h4>
                        <p>We provide a complete security consulting service. On demand we will thoroughly assess your site for new and existing businesses.We will also create and assess security protocols, additionally we will evaluate the current systems and provide comprehensive recommendations in report form</p>
                    </div>
                    <Link to="/services">
                    <button className="learn-more">
                        Learn More <MdArrowOutward/>
                    </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
 
export default Service;