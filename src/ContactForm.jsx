import { useState } from "react";
import { send } from "emailjs-com";

//https://medium.com/geekculture/how-to-send-emails-from-a-form-in-react-emailjs-6cdd21bb4190

const ContactForm = ({toSend, onSubmit, handleChange}) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")

    const textChange = (e) => {

        let target = "";

        switch (e.target.id) {
            case "name":
                target = setName;
                break;
            case "email":
                target = setEmail;
                break;
            case "comment":
                target = setComment;
                break;
            default:
                return null
        }
        target(e.target.value)
    }

    const handleSubmit = (event) => {
      event.preventDefault();
    //   alert("Submited")
    }

    console.log(toSend)



    return (
        <div className="contact-form">
            <h2>Contact Me</h2>
            {/* <p>* Required</p> */}
            <form action="" className="form-elem" onSubmit={onSubmit} >
                <label htmlFor=""> Name:
                    <input type="text" name="from_name" id="name" value={toSend.from_name} onChange={handleChange} />
                </label>

                <label htmlFor=""> Email:
                    <input type="email" name="email" id="email" value={toSend.email} onChange={handleChange} />
                </label>

                <label htmlFor=""> Comment:
                    <textarea name="message" id="comment" cols="30" rows="10" value={toSend.message} onChange={handleChange} />
                </label>
                <button className="form-btn"> 
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactForm;