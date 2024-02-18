import React from 'react';
import MailtoButton from '../MailtoButton';
import EmailContactForm from '../EmailContactForm';




const Contact = (props) => (
   <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
         <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Contact me</h1>
            <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
         </div>
         <div className="col-md-10 mx-auto col-lg-5">
            {/* <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
               <div className="mb-3" >
                  <label className="d-flex flex-column">
                     Message
                     <textarea className="form-control form-text" id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
                  </label>
               </div>
               <div className="mb-3">
                  <label className='d-flex flex-column'>
                     Email address
                     <input type="email" className="form-control form-text" id="emailContact" placeholder="name@example.com" />

                  </label>
               </div>
               <hr className="my-4" />
               <MailtoButton label={"Send"} mailto={"urbangraphic@live.com"}/>
            </form> */}
            <EmailContactForm />
         </div>
      </div>
   </div>

);

export default Contact;