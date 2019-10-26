import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact-wrapper">
            <form className="contact-form">
                <div>Get in touch with me</div>
                <div>
                    <input type="text" placeholder="Your Name (required)"/><input type="email" placeholder="Your E-mail (required)"/>
                </div>
                <div>
                    <textarea placeholder="Your Message"/>
                </div>
                <button>Get in touch</button>
            </form>
        </div>
    );
}

export default Contact;