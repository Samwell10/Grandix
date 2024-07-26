import About from "../Component/Aboutus/About";
import Contact from "../Component/Contact/Contact";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import Navbar from "../Component/Navbar/Navbar";
import Personal from "../Component/PersonalStatement/Personal";
import Service from "../Component/Services/Service";
import Testimonial from "../Component/Testimonial/Testimonial";

const Home = () => {
    return ( 
        <div className="home">
            <Navbar/>
            <Header/>
            <About/>
            <Testimonial 
                title="Trained and Qualified Guards"
                content="We have been in the security industry for more than 15 years. Numerous sites have been covered by us."
            />
            <Personal/>
            <Service/>
            <Testimonial 
                title=" GRANDIX SECURITY PERSONNEL"
                content="UK security service providers for private clients and Businesses"
            />
            <Contact/>
        </div>
    );
}
 
export default Home;