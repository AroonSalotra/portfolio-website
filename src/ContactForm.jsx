import { useState } from "react";

const ContactForm = (props) => {
    const [display, setDisplay] = useState("clr-dark")
    return (
        <form action="" className={`form-container ${props.display}`}>
            <label htmlFor=""> Name <br />
                <input type="text" />
            </label>
            <label htmlFor=""> Email <br />
                <input type="email" />
            </label>
            <label htmlFor=""> Comment <br />
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </label>
            <button type="button"> <span className="btn-form">Submit</span> </button>
            
        </form>
    );
}

export default ContactForm;