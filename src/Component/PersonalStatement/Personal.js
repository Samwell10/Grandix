import "./Personal.css"
import { motion } from "framer-motion";
import { GoShieldCheck } from "react-icons/go";
import { AiOutlineAim } from "react-icons/ai";
import { SiAlwaysdata } from "react-icons/si";
const Personal = () => {
    return ( 
        <div className="personal">
            <motion.h4
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: 0.5 }} 
                className="about-header"
            >
                Grandix Security Personnel Statement 
            </motion.h4>
            <div className="personal-statement-con">
                <div className="statement">
                    <motion.div 
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.8 }} 
                        className="statement-icon"
                    >
                        <SiAlwaysdata />
                    </motion.div>
                    <div className="statement-content">
                        <motion.h4
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 1 }} 
                        >
                            Our Mission
                        </motion.h4>
                        <motion.p
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 1.2 }} 
                        >
                            Our clients are always our top priority. Because we want you to choose the solution that best 
                            meets your needs, we provide a wide range of services to assist you in making an informed 
                            choice about the security of your business 
                        </motion.p>
                    </div>
                </div>
                <div className="statement">
                    <motion.div 
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.8 }} 
                        className="statement-icon"
                    >
                        <AiOutlineAim />
                    </motion.div>
                    <div className="statement-content">
                        <motion.h4
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 1 }} 
                        >
                            Our Aim
                        </motion.h4>
                        <motion.p
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 1.2 }} 
                        >
                           Your total satisfaction with our services is what we strive for. Since we place a high priority on 
                            protecting your security, we provide everything you would expect from a client-focused 
                            business.
                        </motion.p>
                    </div>
                </div>
                <div className="statement">
                    <motion.div 
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.8 }} 
                        className="statement-icon"
                    >
                        <GoShieldCheck />
                    </motion.div>
                    <div className="statement-content">
                        <motion.h4
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 1 }} 
                        >
                            Our Promise
                        </motion.h4>
                        <motion.p
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 1.2 }} 
                        >
                           For an incredible price, our clients will receive the finest grade of security management. Our first 
                           priority is making our customers happy.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Personal;