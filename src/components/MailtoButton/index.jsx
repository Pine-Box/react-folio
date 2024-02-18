import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = (props) => {
    let label = props.label;
    let body = props.body;
    let mailFrom = props.mailFrom;

    console.log('label: ' + label)
    console.log('body: ' + body)
    console.log('mailFrom: ' + mailFrom)
    console.log(`mailto:urbangraphic@gmail.com?body=${body}&subject=Profile%20contact%20request${mailFrom}`);

     function handleFormSubmit(e) {
        if (body == "" || mailFrom == ""){
            //TODO: display error
            return new error('All fields should be entered')
        }  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mailFrom)) {
            props.mailFrom = ''
            //TODO: display error
            return new error('Invalid email address')
          }
        let mailto = `mailto:urbangraphic@gmail.com?body=${body}&subject=Profile%20contact%20request%20from%20${mailFrom}`
        window.location.href = mailto
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

    };

    return (
        <Link
            to='#'
            onClick={handleFormSubmit}           
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;