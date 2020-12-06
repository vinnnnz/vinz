import React, { useState } from 'react';
import './contact.css';

const Contact = () => {

    const [form, setForm] = useState({ to: 'vineetkse@gmail.com', from: '', subject: 'Message from portfolio', body: '', fromName: '' });

    return (
        <div className="contact-wrapper">
            <form className="contact-form">
                <div>Get in touch with me</div>
                <div>
                    <input onChange={e => setForm({ ...form, ...{ fromName: e.target.value } })} type="text" placeholder="Your Name (required)" />
                    <input onChange={e => setForm({ ...form, ...{ from: e.target.value } })} type="email" placeholder="Your E-mail (required)" />
                </div>
                <div>
                    <textarea placeholder="Your Message" onChange={e => setForm({...form, ...{body: e.target.value}})}/>
                </div>
                 <a href={`mailto:${form.to}?subject=${form.fromName}-${form.subject}&body=${form.body}`} >Get in touch</a>{/* onClick={handleMailTo}>Get in touch</button> */}
            </form>
        </div>
    );
}

export default Contact;