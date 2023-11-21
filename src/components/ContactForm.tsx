import emailjs from '@emailjs/browser';
import React from 'react';
import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  example: string;
  exampleRequired: string;
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  
  const onSubmit = async (data: { name: any; email: any; subject: any; message: any; }) => {
    const {name, email, subject, message } = data;

    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Subject: ', subject);
    console.log('Message: ', message);
  }

  return (
    <div className="ContactForm">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="contactForm" onSubmit={handleSubmit(onSubmit)} noValidate>
              <form id="contact-form" noValidate>
                {/* Row 1 of form */}
                <div className="row formRow">
                  <div className="col-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control formInput"
                      placeholder="Name"
                    ></input>
                  </div>
                  <div className="col-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control formInput"
                      placeholder="Email address"
                    ></input>
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className="row formRow">
                  <div className="col">
                    <input
                      type="text"
                      name="subject"
                      className="form-control formInput"
                      placeholder="Subject"
                    ></input>
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className="row formRow">
                  <div className="col">
                    <textarea
                      rows={3}
                      name="message"
                      className="form-control formInput"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
