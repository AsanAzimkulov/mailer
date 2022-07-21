import emailjs from '@emailjs/browser/es';
import React, { useRef } from 'react';
// import { toast } from 'react-toastify';
export default function ContactUs() {
  const formRef = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_9mt3fe5', 'template_w7s8t38', formRef.current, 'vqBagreTqyIsDjOsq')
      .then(
        (result) => {
          console.log(result.text);
          // toast.info('Success!!');
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  }

  return (
    <div>
      <div className='container'>
        <form onSubmit={sendEmail} ref={formRef}>
          <div className='row pt-5 mx-auto'>
            <div className='col-8 form-group mx-auto'>
              <input
                type='text'
                className='form-control'
                placeholder='Your name'
                name='customer_name'
              />
            </div>
            <div className='col-8 form-group pt-2 mx-auto'>
              <input
                type='email'
                className='form-control'
                placeholder='Email Address'
                name='reply_to'
              />
            </div>
            <div className='col-8 form-group pt-2 mx-auto'>
              <textarea
                className='form-control'
                id=''
                cols='30'
                rows='8'
                placeholder='Your message'
                name='message'></textarea>
            </div>
            <div className='col-8 pt-3 mx-auto'>
              <input type='submit' className='btn btn-info' value='Send Message'></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
