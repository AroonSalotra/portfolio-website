import { useState } from "react";
import { send } from "emailjs-com/es/methods/send/send";

const ContactForm = (props) => {
    const [display, setDisplay] = useState("clr-dark")

    const [toSend, setToSend] = useState({
        from_name: "",
        email: "",
        message: "",
        reply_to: ""
    })

    const onSubmit = (e) => {
        e.preventDefault();

        send(
            //ServiceID
            'service_r76eupk',
            //TemplateID
            'template_u9xaust',
            toSend,
            //UserID
            'mxTTQBdikoSMlFRj9'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("message sent")
            })
            .catch((err) => {
                console.log('FAILED...', err);
                alert("error sending message, please try again")
            });

    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    console.log(toSend)


    return (
        <form action="" className={`form-container ${props.display}`} onSubmit={onSubmit} >
        
            <label htmlFor=""> Your Name <br />
                <input type="text" name="from_name" id="name"
                    value={toSend.from_name}
                    onChange={handleChange} />
            </label>

            <label htmlFor=""> Your Email <br />
                <input type="email" name="email" required
                    value={toSend.email}
                    onChange={handleChange} />
            </label>

            <label htmlFor=""> Comment <br />
                <textarea name="message" id="" cols="20" rows="10" 
                    value={toSend.message}
                    onChange={handleChange} />
            </label>

            <button id="form-btn">Send</button>

        </form>
    );
}

export default ContactForm;