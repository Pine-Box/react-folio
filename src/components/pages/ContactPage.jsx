import React from 'react';
import MailtoButton from '../MailtoButton';
import EmailContactForm from '../EmailContactForm';




const Contact = (props) => (
   <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
         <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Contact me</h1>
            <p className="col-lg-10 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, hic animi expedita, laudantium iure commodi nisi tempora molestias assumenda asperiores sed iusto nihil culpa, minima quaerat omnis quo. Repellendus, suscipit.</p></div>
         <div className="col-md-10 mx-auto col-lg-5">

            <EmailContactForm />
         </div>
      </div>
   </div>

);

export default Contact;