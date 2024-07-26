import "./Service.css"
import SecurityHeader from "../Component/Security-header/Header";
        import { motion } from "framer-motion";
import { useEffect } from "react";
const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return ( 
        <div className="service-page">
            <SecurityHeader/>
            <div className="service-page-body">
                <motion.h4
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.5 }} 
                    className="about-header service-header-text"
                >
                    To satisfy your demands, we offer a variety of security services:
                </motion.h4>
                <motion.p 
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.8 }}
                    className="about-content service-content-text"
                >
                    <span className="about-title">Corporate Security: </span>
                    As a result of terrorist threats, corporate crimes, and internet-based crimes, there has been an 
                    increase in the necessity for corporate safety in recent years. Therefore, the importance of 
                    having skilled and qualified security personnel cannot be overstated. A thorough, exclusive 
                    company protection solution has been established by Grandix Security for its clients. 
                </motion.p>
                <motion.p 
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.8 }}
                    className="about-content service-content-text"
                >
                    <span className="about-title">Retail Security:  </span>
                    In most retail establishments, shoplifting is common. Each year, retail shrinkage costs retailers 
                    billions of pounds, with personnel accounting for 38% of the losses. Both verbal and physical 
                    intimidation is experienced by retail staff. In the very competitive retail sector, research 
                    demonstrates that the presence of security agents helps to prevent assault and adds to 
                    minimising shrinkage. Reduced shrinkage might result in growth and higher profit margins.
                </motion.p>
                <div>
                    <motion.p 
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.8 }}
                        className="about-content service-content-text"
                    >
                        <span className="about-title">Construction Sites Security:</span>
                        Industry analysts estimate that theft costs the construction sector £1.2 billion yearly. 
                        All of our security officers hold valid SIA licences and CSCS certifications.On building sites, we 
                        have been able to reduce theft and mishaps. 
                    </motion.p>
                    <motion.nav
                     initial={{ y: -50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ type: "spring", duration: 1, delay: 0.8 }}
                    >
                        <span className="about-title about-sub-title">We provide:</span>
                        <ul>
                            <li>Local traffic control </li>
                            <li>Help with on-site health and safety enforcement</li>
                            <li>Permanent mobile surveillance at work</li>
                        </ul>
                    </motion.nav>
                </div>
                <div>
                    <motion.p 
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.8 }}
                        className="about-content service-content-text"
                    >
                        <span className="about-title">Event security:</span>
                        Our package, which also includes advice on crowd control, Danger 
                        prevention,safe, secure venue and stage design at the planning stage. 
                        have been able to reduce theft and mishaps.<span className="about-title about-sub-title">The unexpected can happen at any time.Due to this, our officers have received training in:</span>
                    </motion.p>
                    <motion.nav
                     initial={{ y: -50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ type: "spring", duration: 1, delay: 0.8 }}
                    >
                        <ul>
                            <li>Strategic communication </li>
                            <li>Crisis Control</li>
                            <li>Techniques for fleeing in an emergency</li>
                        </ul>
                    </motion.nav>
                </div>
                <motion.p 
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.8 }}
                    className="about-content service-content-text"
                >
                    <span className="about-title">Key holding and Mobile Patrol: </span>
                    Just 3% of activated alarms receive a police response. What happens if they don't answer yours?
                    Our alarm response team can respond instantly and independently, either with your key holder or 
                    without. We coordinate with the police and give you a thorough incident report. Our proactive 
                    mobile patrol crews will continuously patrol your locations day and night, at predetermined 
                    intervals, or at random. We offer a free Deter Control system. This electronic clocking system 
                    creates a report that includes the patrol's position, date, and time. In order to ensure a prompt 
                    response, if this is used, we make sure that our patrol teams are within a 10-mile radius of your 
                    property.
                </motion.p>
                <div>
                    <motion.p 
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.8 }}
                        className="about-content service-content-text"
                    >
                        <span className="about-title">Door Supervisor: </span>
                        Customers and guests will see door supervisors as soon as they enter a venue. 
                        It is vital that they do a good job of representing your company because of this
                    </motion.p>
                    <motion.nav
                     initial={{ y: -50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ type: "spring", duration: 1, delay: 0.8 }}
                    >
                        <ul>
                            <li>Crowd safety and control</li>
                            <li>Crowd simulation</li>
                            <li>Planning and operational assistance</li>
                            <li>First aid, fire, and safety officers</li>
                        </ul>
                    </motion.nav>
                    <motion.p 
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.8 }}
                        className="about-content service-content-text"
                    >
                        Door supervisors make sure that an event runs smoothly, minimising disagreement and handling 
                        any possible hazards to the safety of those in attendance. 
                        Our door supervisors are all SIA licenced and have a minimum of three years of experience
                    </motion.p>
                </div>
                <motion.p 
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.8 }}
                    className="about-content service-content-text"
                >
                    <span className="about-title">Security Consultancy and Risk Management :</span>
                    We provide a complete security consulting service. On demand we will thoroughly assess your 
                    site for new and existing businesses.We will also create and assess security 
                    protocols.,additionally we will evaluate the current systems and provide comprehensive 
                    recommendations in report form.
                </motion.p>
            </div>
        </div>
    );
}
 
export default Services;