import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import { AiFillGithub, AiFillMail, AiFillPhone } from "react-icons/ai"


const Contact = () => {
    const [display, setDisplay] = useState("display-hide")

    const handleClick = () => {
        navigator.clipboard.writeText("aroonsalotra@gmail.com")
        setDisplay("")
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (display !== "display-hide") {
                setDisplay("display-hide")
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, [display]);

    return (
        <div className="content-align">
            <h1 className="subtitle highlight-s">Contact</h1>
            <div className="contact-split">
                <ContactForm />
                <div className="content-break" />
                {/* <div className="contact-text"> */}
                <div className="contact-text">
                    <p>Or click:
                        <AiFillMail className="contact-icon"
                            onClick={() => handleClick()} />
                        to copy</p>
                </div>
                <p className={`${display} contact-notify`}>Copied!</p>
                {/* </div> */}
            </div>
        </div>
    );
}

export default Contact;