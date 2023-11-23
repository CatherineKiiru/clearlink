import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  example: string;
  exampleRequired: string;
};

//destructuring methods & props from react hook form and assigning to the contactForm function
function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // states for triggering and rerendering elements in the form
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  function toggleAlert(message: any, type: any) {
    //Updates the setAlertInfo state to true, and with a given message and type
    setAlertInfo({ display: true, message, type });
  }

  setTimeout(() => {
    setAlertInfo({ display: false, message: '', type: '' }); //hide the alert we defined above after 5 seconds
  }, 5000);

  const onSubmit = async (data: any) => {
    const { name, email, subject, message } = data; //Destructure the data object
    try {
      setDisabled(true); // Disable form while loading & processing submission data

      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      // integrate emailjs to send contact data
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      );

      toggleAlert('Form submission was successful', 'success'); // Render success alert
    } catch (e) {
      console.error(e); //Display error alert
      toggleAlert('Opops! something went wrong', 'danger');
    } finally {
      setDisabled(false); // Re-enable form submission and reset contact form fields after submission
      reset();
    }
  };

  return (
    <div className="py-12 container mx-auto">
      <div className="" onSubmit={handleSubmit(onSubmit)}>
        <form
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className=""
        >
          {/* name input-1st row */}
          <div className="gap-12 md:flex px-5 mx-auto text-center justify-center">
            <div>
            <div className="">
              <input
                type="text"
                {...register('name', {
                  required:true})}
                className="px-12 rounded-md"
                placeholder="Name"
              ></input>
              </div>
              {errors.name && (
              <span className=" text-red-500 text-center justify-center">
                Please enter your name
              </span>)}
            </div>
            <div className="">
              <div>
              <input
                type="email"
                {...register('email', {
                  required:true
                })}
                
                className="px-12 mt-10 md:mt-0 md:px-20 rounded-md"
                placeholder="Your email address"
              ></input>
            </div>
            {errors.email && (
              <span className=" text-red-500 text-center justify-center">
                Please enter a valid email address
              </span>)}
            </div>
          </div>
          {/* Subject section - 2nd row */}
          <div className="text-center mt-8">
            <div>
              <input
                type="text"
                {...register('subject', {
                  required: true,
                })}
                className="px-12 md:mt-0 md:px-[17rem] rounded-md"
                placeholder="Email subject"
              ></input>
            </div>
            {errors.subject && (
              <span className="flex text-red-500 text-center justify-center">
                Please enter a subject
              </span>
            )}
          </div>
          {/* Message section - 3rd row */}
          <div className="text-center mt-8">
            <div className="">
              <textarea
                rows={4}
                {...register('message', {
                  required: true,
                })}
                className=" px-14 md:mt-0 md:px-72 rounded-md"
                placeholder="Write your message here..."
              ></textarea>
              {errors.message && (
                <span className="flex text-red-500 text-center justify-center">
                  Please enter your message
                </span>
              )}
            </div>
          </div>
          <div className="text-center">
            <button className=" mt-8 bg-button-blue text-white px-12 py-4 rounded-full shadow-md hover:bg-blue-400" disabled={disabled} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      {alertInfo.display && (
        <div
          className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
          role="alert"
        >
          {alertInfo.message}
          <button
            type="button"
            className=""
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() =>
              setAlertInfo({ display: false, message: '', type: '' })
            }
          ></button>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
