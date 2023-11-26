import emailjs from '@emailjs/browser';
import {
  Button,
  Checkbox,
  Footer,
  Label,
  TextInput,
  Textarea,
} from 'flowbite-react';
import React, { useState } from 'react';
import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Toast } from 'flowbite-react';
import { HiCheck, HiExclamation, HiX } from 'react-icons/hi';
import FooterSection from '../src/components/Footer';
import NavBar from './NavBar';

type Inputs = {
  example: string;
  exampleRequired: string;
};

//destructuring methods & props from react hook form and assigning to the contactForm function
function Contacts() {
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
  });

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

      toggleAlert('Enquiry submitted successfuly!', 'success'); // Render success alert
    } catch (e) {
      console.error(e); //Display error alert
      toggleAlert('Opops! something went wrong', 'danger');
    } finally {
      setDisabled(false); // Re-enable form submission and reset contact form fields after submission
      reset();
    }
  };

  return (
    <>
    <div className='hidden md:block'>
    <NavBar/>
    </div>
      <div className="py-12 container mx-auto bg-white">
      <img src="/src/images/clearlink-logo.png" className='md:hidden px-5' alt="clearlink logo" />
        <div className="md:flex" onSubmit={handleSubmit(onSubmit)}>
          <form className="flex max-w-md bg-white mt-24 md:max-w-xl container mx-auto flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name1" value="Your name" />
              </div>
              <TextInput
                id="name1"
                type="text"
                {...register('name', {
                  required: true,
                })}
                placeholder="Please add your name"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                {...register('email', {
                  required: true,
                })}
                placeholder="Please add a valid email address"
                required
              />
            </div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your message" />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
            />
            <Button
              className="bg-button-blue"
              disabled={disabled}
              type="submit"
            >
              Submit
            </Button>
          </form>
          <div className="mt-6 md:mt-0 ">
            <img className="" src="/src/images/hero-image.png" alt="" />
          </div>
        </div>

        {alertInfo.display && (
          <div className="">
            <Toast className="mt-10 p-2 bg-green-500 text-white shadow-lg">
              {alertInfo.message}

              <Toast.Toggle className="bg-green-500 text-white" />
            </Toast>
          </div>
        )}
      </div>
      <div className="mt-12">
        <FooterSection />
      </div>
    </>
  );
}

export default Contacts;
