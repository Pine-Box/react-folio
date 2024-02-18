import React, { useState } from 'react';

import MailtoButton from '../MailtoButton'





const EmailContactForm = (props) => {

       const [mailFrom, setMailFrom] = useState('');
       const [body, setBody] = useState('');

       function handleMessageBody(e){
           setBody(e.target.value);
       }

       function handleEmailFrom(e){
           setMailFrom(e.target.value);
        }

        return (

            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" >
                {props.children}
                <div className="mb-3" >
                    <label className="d-flex flex-column">Message
                        <textarea className="form-control form-text" onChange={handleMessageBody} id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
                    </label>
                </div>
                <div className="mb-3" >
                    <label className='d-flex flex-column'>
                        Email address
                        <input type="email" onChange={handleEmailFrom} className="form-control form-text" id="emailContact" placeholder="name@example.com" />
                    </label>
                </div>
                <hr className="my-4" />
                <MailtoButton label="Send" mailFrom={mailFrom} body={body} />
            </form>
        );
    };

    export default EmailContactForm;

