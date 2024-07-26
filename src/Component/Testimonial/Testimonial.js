import "./Testimonal.css"
import { motion } from "framer-motion";
const Testimonial = ({title, content}) => {
    return ( 
        <div className="testimonial about">
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: 0.5 }}
                className="testimonial-topic"
            >Grandix<span>.</span>
            </motion.p>
            <motion.h4 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: 0.8 }} 
                className="team-head"
            >
               {title}
            </motion.h4>
            <motion.p 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: 1 }} 
                className="team-body"
            >
                {content}
            </motion.p>
        </div>
    );
}
 
export default Testimonial;