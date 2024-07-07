import "./Contact.css"
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import { useState } from "react";
const Contact = () => {
    // const [email, setEmail] = useState('');
    // const [name, setName] = useState('');
    // const [subject, setSubject] = useState('');
    // const [category, setCategory] = useState('');
    // const [description, setDescription] = useState('');
    // const [show, setshow] = useState(false);
    // const [ispending, setIspending] = useState(false)
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const body ={email, name, subject, category, description}
    //     const contact = {body}
    //     setIspending(true)

    //     fetch('https://credio-api.herokuapp.com/api/v1/contact-us', {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(contact)
    //     }).then((res) => {
    //         setshow(true)
    //         setIspending(false)
    //         setName('')
    //         setEmail('')
    //         setDescription('')
    //         setCategory('')
    //         setSubject('')
    //     }) .catch(error => console.log(error));
    // }
    return ( 
        <div className="contact" id="contact">
            <div className="contact-left">
                <div className="contact-left-item">
                    <h3 className="contact-head">Get in <span>Touch</span></h3>
                    <p className="contact-body">Ready to turn your vision into reality? Reach out and let's make it happen together.</p>
                    <form >
                        <div className="form-1">
                            <input required placeholder="Name*" type="text"></input>
                        </div>
                        <div className="form-1">
                            <input required placeholder="Email*" type="text"></input>
                        </div>
                        <div className="form-1">
                            <input required placeholder="Subject*" type="text"></input>
                        </div>
                        <div className="form-1">
                            <textarea required placeholder="Description*" type="text"></textarea>
                        </div>
                            <button className="send">Send</button>
                    </form>
                    <div className="contact-us">
                        <div className="contact-method">
                            <div className="contact-icon">
                                <FiPhoneCall/>
                            </div>
                            <a href={`tel: 08055889999`}>
                                <div className="contact-details">
                                    <h4>PHONE</h4>
                                    <p>08055889999</p>
                                </div>
                            </a>
                        </div>
                        <div className="contact-method">
                            <div className="contact-icon">
                                <IoIosGlobe />
                            </div>
                            <a href="https://crediometer.com/" target="_blank">
                                <div className="contact-details">
                                    <h4>Website</h4>
                                    <p>grandixlimited.com</p>
                                </div>
                            </a>
                        </div>
                        <div className="contact-method">
                            <div className="contact-icon">
                                <MdOutlineMail/>
                            </div>
                            <a href={`mailto: info@grandixlimited.com`}>
                                <div className="contact-details">
                                    <h4>Email</h4>
                                    <p>info@grandixlimited.com</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3957.8210596459444!2d5.171436975081708!3d7.261195692745609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s220%20Oyemekun%20road%2C%20beside%20Michelin%20Tyres%20Services%2C%20Airways%20Akure.!5e0!3m2!1sen!2sng!4v1715555064859!5m2!1sen!2sng" frameborder="0" className="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
            <div className="contact-right">
            </div>
        </div>
    );
}
 
export default Contact;