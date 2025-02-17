import "./Header.css"
import backgronnd  from "../../Assets/background.jpg"
import { motion } from "framer-motion";
const Header = () => {
    return ( 
        <div className="header" id="home">
            <div className="blob">
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: "rgb(194, 229, 156)"}}></stop>
                        <stop offset="100%" style={{stopColor: "rgb(100, 179, 244)"}}></stop>
                        </linearGradient>
                    </defs>
                    <path id="blob"  fill="#1c37cf0a">
                        <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="
                            
                            M420,298Q382,346,347,393.5Q312,441,249.5,442Q187,443,119,419Q51,395,50.5,322.5Q50,250,50,177.5Q50,105,118,79Q186,53,251.5,49Q317,45,384.5,74Q452,103,455,176.5Q458,250,420,298Z;
                            
                            M459.5,316.5Q433,383,370.5,406Q308,429,249.5,429.5Q191,430,126.5,408.5Q62,387,36.5,318.5Q11,250,38.5,183Q66,116,129,93.5Q192,71,247.5,78.5Q303,86,357,109.5Q411,133,448.5,191.5Q486,250,459.5,316.5Z;

                            M443,304.5Q401,359,353,389.5Q305,420,248,425.5Q191,431,139,399.5Q87,368,49.5,309Q12,250,34.5,180Q57,110,119,74Q181,38,250,37.5Q319,37,350.5,95.5Q382,154,433.5,202Q485,250,443,304.5Z;

                            M469.5,319Q440,388,380,427Q320,466,261,431.5Q202,397,140.5,385.5Q79,374,59.5,312Q40,250,70,195.5Q100,141,150,118Q200,95,249,99Q298,103,347,123.5Q396,144,447.5,197Q499,250,469.5,319Z;

                            M425,304.5Q399,359,358.5,410Q318,461,246,473Q174,485,121.5,433.5Q69,382,82.5,316Q96,250,80,182.5Q64,115,120.5,71Q177,27,249.5,27.5Q322,28,351.5,91.5Q381,155,416,202.5Q451,250,425,304.5Z;

                            M420,298Q382,346,347,393.5Q312,441,249.5,442Q187,443,119,419Q51,395,50.5,322.5Q50,250,50,177.5Q50,105,118,79Q186,53,251.5,49Q317,45,384.5,74Q452,103,455,176.5Q458,250,420,298Z;
                        "></animate>
                    </path>
                </svg>
            </div>
            <div className="header-left">
                <motion.h2
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.3 }}
                >
                    Explore our premier <span>security</span> solutions
                </motion.h2>
                <motion.button
                 initial={{ y: -50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ type: "spring", duration: 1, delay: 0.5 }}
                >
                    Contact Us
                </motion.button>
            </div>
            {/* <div className="header-right">
                <div className="header-image">
                    <img src={backgronnd} alt="hero-image"></img>
                </div>
            </div> */}
        </div>
    );
}
 
export default Header;