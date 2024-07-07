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
                With Grandix Security Personnel leading the way, safety and protection are guaranteed.<br></br>
                Our team prides itself on expertise, especially in close protection security and construction site security services.
            </motion.p>
            <motion.div 
             initial={{ y: -100, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ type: "spring", duration: 1, delay: 0.3 }}
                className="services"
            >
                {serviceData.map((service)=>{
                    return (
                        <div className="service-inner">
                            <img src={service.image}></img>
                            <p>{service.service}</p>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    );
}
 
export default Service;