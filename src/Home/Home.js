import About from "../Component/Aboutus/About";
import Contact from "../Component/Contact/Contact";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import Navbar from "../Component/Navbar/Navbar";
import Service from "../Component/Services/Service";
import Testimonial from "../Component/Testimonial/Testimonial";

const Home = () => {
    return ( 
        <div className="home">
            <Navbar/>
            <Header/>
            <About/>
            <Service/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    );
}
 
export default Home;