import emailjs from '@emailjs/browser';
import React from 'react';
import { useRef } from 'react';


function ContactForm() {
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_0hb9377', 'clearlink_contact_form', form.current!, '7rIw66d_wzJGo2tBC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
  };
  
  


export default ContactForm;
