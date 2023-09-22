import "./Home-contact.scss";
import {Link} from "react-router-dom";


const HomeContact = () => {

    return(
        <div className="contact-wrapper"> 
           <div className="contact-head">
                <div className="contact-head-title">
                    <h1>CONTACT</h1>
                </div>
                <div className="contact-head-divisor"></div>
                <div className="contact-head-desc">
                    <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.</p>
                </div>
           </div>
           <div className="contact-form">
                <form action="#" method="post">
                    <div class="contact-form-field">
                        <label className="contact-form-field-label" for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required/>
                    </div>
                    <div class="contact-form-field">
                        <label className="contact-form-field-label" for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required/>
                    </div>
                    <div class="contact-form-field">
                        <label className="contact-form-field-label" for="message">Message</label>
                        <textarea id="message" name="message" placeholder="Enter your message" cols="30" rows="10" required/>
                    </div>
                    <div class="contact-form-button">
                        <button type="submit"><p>SUBMIT</p></button>
                    </div>
                </form>
           </div>
        </div>
    )

}

export default HomeContact; 