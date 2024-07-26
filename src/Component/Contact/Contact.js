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
                            <a href={`tel:  +44(0)2071014819`}>
                                <div className="contact-details">
                                    <h4>Tel</h4>
                                    <p>+44 (0)207 101 4819</p>
                                </div>
                            </a>
                        </div>
                        <div className="contact-method">
                            <div className="contact-icon">
                                <FiPhoneCall/>
                            </div>
                            <a href={`tel:  +44(0)2071014819`}>
                                <div className="contact-details">
                                    <h4>Mobile</h4>
                                    <p>+44 755 3313 718</p>
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.711716577138!2d-0.14708490966870136!3d51.51850469914525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb65eafa50b41%3A0x5cc18d8ac0207ee0!2sVideoFirst!5e0!3m2!1sen!2sng!4v1721948887190!5m2!1sen!2sng" frameborder="0" className="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
            <div className="contact-right">
            </div>
        </div>
    );
}
 
export default Contact;