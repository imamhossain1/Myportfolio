import React from 'react'
import './contact.css'; 
import { useRef } from 'react';
import {MdOutlineEmail  } from "react-icons/md";
import {BsMessenger  } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_igksxeu', 'template_92z1tib', form.current, 'JcvlIb055sKFTq5tr');
    e.target.reset();
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5> imanhossain914@gmail.com</h5>
            <a href="mailto:imanhossain914@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className='contact_option'>
            <BsMessenger className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5> imanhossain</h5>
            <a href="htttps://m.me/imamhosseniman" target='_blank'>Send a Message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+8801401563509</h5>
            <a href="https://api.whatsapp.com/send?phone=+8801401563509" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send a Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
